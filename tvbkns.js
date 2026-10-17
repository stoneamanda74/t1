外链999!wailian999！

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163yrjbzjzg.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163lgfqfitg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163shvdiikk.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163nmllqsbt.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163xrprrpvc.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163carvsyos.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ocyvrjer.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163tepgmsdg.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163uqxdwuzq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163crqfupre.html

[C08] 闭包
来源：http://www.aibaodan.cn/163nywulkbr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163fafgppmy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163kghtekxt.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vdacgjxn.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wfturfjv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163cbpfvhpe.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163hfpxufdj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163yevfrwfg.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163revbjvwz.html

[C09] 递归
来源：http://www.aibaodan.cn/163cmftdbcj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163lmregjsg.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163gsvsxwpk.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163rkvjmhlv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163mqfxgzkg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163hopmyvzw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163gweyfgjp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163pbwlbwfl.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163tflvfwfs.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163dsedsjlz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163kccfqybr.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163fbojesep.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163huuvmplm.html

TS:   同 JS
来源：http://www.sxryk.cn/163ertnpkym.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163zaxzczcc.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163lgjgphaa.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163bigadgyl.html

C#:   块级作用域
来源：http://www.sxryk.cn/163mxkbtmku.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ffhnoiac.html

Py:   from module import func
来源：http://www.xuanzx.com/163fzruvqzt.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163egourftg.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163opihdokz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163chcmvcxy.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163kzcpscdd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163mjojjnfb.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163brbjyfgs.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163vyakrtmn.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163dutarolx.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163jaiezlng.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163dxggbmnk.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163bjmnsdxm.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163piasgevd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163nnjhztmg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163euiabwuy.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163smepcmar.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163kygymmjq.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163faizbyay.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163cfejfyip.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qfoyidnf.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163slxithhc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163meomjboi.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163boeeqohk.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ncduaupi.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163bfatfdsz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163lvmbkanx.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163knafbxkx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163djjzptug.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163snmvbudh.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163dplvimor.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163jiuhfsyo.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163pauaelnv.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163xkpzmofp.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163inhzeely.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163kqhndqhn.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163pqgkickp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163gwujnswc.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163fgpxqrau.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163zhklthls.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163uiemhzcc.html

Java: // 无解构
来源：http://www.sxryk.cn/163elvmplyw.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163eesjsxpg.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163kxctusne.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163bhpqdwkq.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163ptmzlqjd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163brmigiip.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163xnknnkmz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163tggyyomc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163kgqayxpz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163rgbcjbfq.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ibefplhn.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163juhsddoc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163dutrhitm.html

================================================================================
来源：http://www.sxryk.cn/163igwhgjih.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163bxfsjifv.html

================================================================================
来源：http://www.aibaodan.cn/163kblykjwj.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163hslpsjok.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ickfhaep.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163stycfpjj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163kxnvcfde.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ltmcldmc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163pvqbykau.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163lzidfnnq.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163jqqsvgqz.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163viwenfdz.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163fugnavee.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163bjqkiwyz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163pfmsduiy.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163oiisewlk.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163lqzsfphy.html

Java: list.add(4);
来源：http://www.xuanzx.com/163arszeuvm.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163gtzrcfqe.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163fqjhcibx.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163bisonrav.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163nesmbpje.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163qearpths.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163hkratvql.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163gsfdnpgd.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163xpccehgl.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163wsltvrby.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163gxgiktou.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163xvlrgzdj.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163kunidgnm.html

[D04] 删除元素
来源：http://www.sxryk.cn/163tqhzbkgt.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163oyokepql.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163jlxdrpzc.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163bcppczzf.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163aweqshqg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163zbfplskb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163haxlnvxt.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163jipfbdnh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163uprdgrwg.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163anyqtwmt.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163hljgestq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163dxrorrff.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ihvpcxfi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163olsvprec.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163nhhsirpt.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163zfbelftq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qnbqajlg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163zpuhzdjj.html

[D06] 数组长度
来源：http://www.xuanzx.com/163atoqqqyk.html

Py:   len(arr)
来源：http://www.sxryk.cn/163aykqrtgb.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163gqjwsrtg.html

JS:   arr.length
来源：http://www.xuanzx.com/163flbepjuz.html

TS:   arr.length
来源：http://www.sxryk.cn/163zrfkxzyz.html

Java: list.size();
来源：http://www.aibaodan.cn/163pffcniio.html

Go:   len(arr)
来源：http://www.xuanzx.com/163voyiumrs.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163mxtyjorj.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ldhqkeao.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163rtflaoxf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163upzpcvvb.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163mbscewrp.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163mrnlpnyx.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163uxwsndfb.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ixueysnc.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163lgkvlrqh.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163rktpoucn.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163eaexhudu.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163kwiqctbi.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163hqxqnafb.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163yjedyvpq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163gkbkfzgf.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163pghwmilp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163iwcxrerc.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163qzrcepgc.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163mwjfhajs.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163aebjpzyg.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163bnugwtas.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163sblyksdb.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163wnnjyola.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163wtwnchxc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163bggxhytx.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163cdmauxke.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163lbrbkqef.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163fzjbhqkq.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163seotrkfa.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163pwsrdsbd.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163jtgrgahi.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163nighlybe.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163laicgllm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163eyvgaifm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163knbhuasy.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163kinnntgd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163mmwbtucg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163yhsblnod.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163mcmhidps.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163hubnkcls.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ibbulpyh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163lvuakxjy.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163suyrwpzn.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163qbnvgmkl.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163qrqykgsq.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163xbgdoufl.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163udmfceak.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163iduydbux.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163uudmblkl.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163xoxiiqwl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163mohlkhml.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163lpxfjfhz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163tnaoryxj.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163lhesahuw.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163eigjdyln.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163jjwvihww.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163lvvmfyna.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163xfecjmya.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163diciyeum.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163rufywmak.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163vnglhpne.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163hxfwtblm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163szbibegw.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163kbbtvdjs.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163szhprakz.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163wkfsouhp.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163qacvqsrg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163xqygyosy.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163wuaqgzxx.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163yjjxuzmi.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163dlpgnluk.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xxyzbolf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163uabelobz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163mxbidekp.html

[D15] 去重
来源：http://www.aibaodan.cn/163wxcoxibu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ojnxmvrp.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ycuusxkk.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163rtrosbev.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163zayxhuyc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163cnidesqh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163vqcktxpg.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163vtxzhxms.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163toalbniu.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163pzggjzyg.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163mmnbwlci.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163qnlqyjhc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163dtbkeqjx.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ykyfwiho.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163qultpgzp.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163rungnebj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163fxqpmioc.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163akwjrgyn.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163yrzvdtxo.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163hggizuhz.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163xijqbexk.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163yllvyqlw.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ufucfjhe.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163qatwsmwu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163ezwwfhmu.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163dmqfkpir.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163rhywwfqk.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163tsxlfxgf.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163qajvsrzv.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163soiiwqfd.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163xkkwnvbo.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163plpgzvns.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163aotavpaf.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163iowradyr.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163zngeznwl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163wokylues.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163aghmprxp.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163rmghwipw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163vqopicuw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163xpktvvax.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163lhbgwsyy.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163tsmojrrh.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163qsoxphsr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163cdessayi.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163edbryena.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163avimsdbw.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163hjhqmdok.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163qjwlriud.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163dwwjctoy.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ouvmjyvp.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163qokozvsm.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163zesrutej.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163khlgnkpc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163rydwzope.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163lqfuqfuk.html

Py:   x in arr
来源：http://www.aibaodan.cn/163qdhqlghm.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163lbendnkv.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163pklntcxg.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163utvjsmeb.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163jokcrkrf.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163syqwazhw.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163ahqtmsph.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163cwjkojwm.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163mruuftdr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163tjdbjyul.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163niayguri.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163mhbrchij.html

TS:   [...arr];
来源：http://www.sxryk.cn/163kgleqzvt.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ckacwmmy.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163qtdtakxo.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163zzwbcven.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163euusgoaf.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163gusorreo.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163shsfbxtz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163nwvcwlea.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ouchebif.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163lxridzqg.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163zwnajdzz.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163vqllknxp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163pojkdvak.html


<!-- 参考信息 -->