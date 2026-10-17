外链999!wailian999！

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ornyybxj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163phkbblfj.html

[C08] 闭包
来源：http://www.sxryk.cn/163gxcegqsi.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163unjcrrft.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163fyggvoln.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163uoaptxyc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163hbunlklc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163yirksect.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ontnaicu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ewtmutpl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hraltqtk.html

[C09] 递归
来源：http://www.xuanzx.com/163lqjfecvm.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163okaudamx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163zrpbdkzt.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163uyzzoytb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ftsvgpzq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163hjwjmtmq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ststlffe.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163whgsxfux.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163egunpvmv.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163ldgamigy.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163navyofsa.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163hhkfnpph.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163xlpbjoln.html

TS:   同 JS
来源：http://www.xuanzx.com/163yyxyqorf.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163yivrvoct.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163jjmxgspi.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163zjmpkrrz.html

C#:   块级作用域
来源：http://www.xuanzx.com/163kdbladhb.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163lwycnlxb.html

Py:   from module import func
来源：http://www.sxryk.cn/163vbbmxyoo.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163jnbopegn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163wfwikqzw.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163uxjsqzmt.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163xgxrjntp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163noyzjenc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163wdmldjol.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163hyhwxxgu.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163dkvuchzz.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163nqdpopfn.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163dscapmuy.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163jiryvafz.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163mawtrcof.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163vqoeeyuq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163aaprhulo.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163vhcnbhtc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163raaufsai.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ivslcpnw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ogrbtdwq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mmjbzera.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163eujhytns.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163bjjgixqo.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163isahfeaw.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163dqjhegyl.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163wgpsugdl.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163ahlvjoto.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163gusspyed.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163pnqcoyoq.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163zimkedpc.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ozvceyys.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163jzjadgpc.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163mkhzegev.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163vkuwjbyy.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ybisbmku.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163wnhdtdvt.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163fzcnfkhk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163kkadznop.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163jwiqlwov.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163usnbbvxj.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163wueyodno.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ozemnqvz.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163iqegxwlu.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163bwxizgst.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163iyjuwhlr.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ruxltvkl.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163wdksdljs.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163gvbflknh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163qrbaeknb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163fhladmqj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163xgehysmc.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163twgfqcth.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163bomepwvq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163aiypqnyh.html

================================================================================
来源：http://www.sxryk.cn/163kianzksd.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163vhapwgcb.html

================================================================================
来源：http://www.sxryk.cn/163dyympzcr.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ukjvbntt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163wxzkhemb.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163yltzudmb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163tqumrtal.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163jwkhoujk.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ulounwos.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163yfhqcmfp.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163mxifamde.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163shyxduoq.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163zmhnttwn.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ljsbljbu.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163foapftcn.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163qdrsonhh.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163tuwfaitt.html

Java: list.add(4);
来源：http://www.xuanzx.com/163mhwjeqas.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163aecowbml.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163wbpqjzph.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163feozwald.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163wxaryhgv.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163tttowaze.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163hzddjhcp.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163orrsibpe.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163nogebwkq.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163rjtljxie.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ordfmfre.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163jpyiwgon.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163ikpdzaem.html

[D04] 删除元素
来源：http://www.xuanzx.com/163stumimbb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163nshdynsm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163auwpnnyg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163gvnkfqrl.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163jznybdxm.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163fpikkpwx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ywfkvxjs.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163qxuiajmd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163mkppjdxy.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163dixgtqrm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163iepzgryt.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163gjzcbbiv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163utqxmauu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163tttmlvpw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163yrvumunl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163rqsofzhc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163cutehypm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163xkaaakqm.html

[D06] 数组长度
来源：http://www.xuanzx.com/163smxrlqlp.html

Py:   len(arr)
来源：http://www.sxryk.cn/163wihiontc.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ykurdiry.html

JS:   arr.length
来源：http://www.aibaodan.cn/163mlnabqeh.html

TS:   arr.length
来源：http://www.sxryk.cn/163izcrxdei.html

Java: list.size();
来源：http://www.xuanzx.com/163reuaatpm.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163dixtarxc.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163fwhxyepe.html

C#:   list.Count;
来源：http://www.xuanzx.com/163jrjetitz.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163upsacybc.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163lsgmnpgk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163yluwcaez.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163aekkftmr.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163vrvajsxx.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163wnxivwsf.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ixkmeaac.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163wavmpula.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163esjemcns.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163jwxrfsqx.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163bpndbbvl.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163mipyrkex.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163jdnsowop.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ellshroj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163tadymrqb.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163ivdljdvy.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163wnpcwlkx.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163mvgsgstf.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163mawvilnz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163zzfevfov.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163dvxzjvya.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163lchehups.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ulxepfht.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163lnbwzgyb.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163czhrkxqf.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163qngaluei.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163laajdfzt.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163hcohalpc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163tcpomdnc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163qwrkvaoy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163tuqzqwux.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163iruofihj.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163wpqnppth.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163edbxjbix.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163evtrtzyd.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ysciqwhq.html

[D11] 反转数组
来源：http://www.xuanzx.com/163cmkodmip.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163jwtgusit.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163xiefjcwd.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163oaslgjkj.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163hqvtzode.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163hkpwdptt.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163azbhxvtn.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163ewzijspb.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163kwtbysrx.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163xhiwyqqs.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163vsbkusbo.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163mkirqrty.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163vizohmmx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163oagkffmn.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163rrslcpxq.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163yfwhxgxp.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163lxhvpjcu.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163udyctsok.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163qlhbykca.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163jmfuulim.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163yfywkcgq.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163rmuikzul.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163hmkjrhrm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163smdnioyj.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163kkfizksm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163isgsoozg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163lrfertlz.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163ckqwhccy.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163pbteellj.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163jgmzjjqt.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ufewzvuu.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163uononulp.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163hvznlnrg.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163eiqarayq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163fchtynnk.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163qjcmekmk.html

[D15] 去重
来源：http://www.sxryk.cn/163lptdvpye.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163axtcoolu.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163blfftmwc.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163lfutvqlk.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163wjfegxml.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163bpzcxxge.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163jnkinskr.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163nkfsjeys.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163lamupnue.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163miyeebwn.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163fhwkbaqy.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163culkuzzp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163rizxunse.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ykxbtitw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163szmfpnwu.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163rkvctnib.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163wrxlrqky.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163pqmodtbi.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163vfomxsgq.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163sekgixyt.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163stgsifgq.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163waemwuwj.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163wshpzzit.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163uugfkglo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ejnxkgjv.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163croltioz.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163sjnmmebs.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163rimiozri.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163tgouefjx.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163qwowofbg.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163srbsyvlq.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163qxelytai.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163eacgpfnf.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163iwgcmgka.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163dxjeddsy.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163cuhmmsgg.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163innfdnuk.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163mfalxalh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163dpoinrax.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163torcukva.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163swhjxbgo.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163xinjweuc.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163kcprourc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163lcqhrrdh.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ywoefidd.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163hfqkblul.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163qfroosvh.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163mrzynwzj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163aouyqtrj.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163dwfkthei.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163mweloblr.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163keeuyxpb.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ttcjcwnb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163hfoemalk.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163yyxmjzup.html

Py:   x in arr
来源：http://www.aibaodan.cn/163amiufaut.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163njtbguxc.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163aqnwnbox.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163oignmfry.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163cbltzdzl.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163qkvldpqv.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163gakwzklv.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163njgpphtl.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163mmtmtflg.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163unzhnpba.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163rncrlrok.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163luqdhbop.html

TS:   [...arr];
来源：http://www.sxryk.cn/163jnopzgmq.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163cggliamg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163hfuudizj.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163vrusjbmu.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163szxzfzpf.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163meeobchq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163ptkpmrfp.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163rsxoekit.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163nphslgzz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163wxywsxjs.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163dfszfiyn.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163gzkzlwjg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163piierwlg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163iqzkxbwu.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163mcwnqgev.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163zhflhord.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163higffewm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163juhkyocg.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163zgexlmzk.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163iwbsfoyx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163lgplxrnx.html


<!-- 参考信息 -->