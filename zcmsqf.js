外链999!wailian999！

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163mkredoqw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163yleebnpv.html

[C08] 闭包
来源：http://www.xuanzx.com/163hylblqel.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163itzaxjqz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163momlrfcr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xpxcarvk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163brfmvuoh.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163mhswfvbt.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163sycwvxtm.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163kmganfig.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163csphhmzk.html

[C09] 递归
来源：http://www.aibaodan.cn/163zsenmlhy.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163uykkuwqk.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ayyuljju.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163leulsiok.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163brbnaqyw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163mxgjmpna.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163vscodlno.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163crrrmnkg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163yosttrvm.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163lenzjnjd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163rtrojnko.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163myvyretw.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163mvpaksib.html

TS:   同 JS
来源：http://www.aibaodan.cn/163gczsgsed.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163qoxmugtk.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163moujnymo.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163kmjuuxya.html

C#:   块级作用域
来源：http://www.sxryk.cn/163rpzlrafl.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163haxupgtu.html

Py:   from module import func
来源：http://www.xuanzx.com/163ltzebdxg.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163uzfysset.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163azhjucjx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163mcwqjqhg.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163dxhunodv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163yjxvggee.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163xyepefzj.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163udreklyx.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163qoziwfup.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163oqaikywi.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ryctjyod.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163vjbunpcr.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163czkafvwp.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163phxrmjgu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163fequjmyc.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163fgbedzwv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163vyfbrrdk.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163zdiwlmyu.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163jggqnxsh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163yjcukdgr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ihnblhok.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163prfwyrey.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qhzvgwhv.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163eiacmebf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163tchlqjfj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163shemwojy.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ugzlyfvj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163rxyklufy.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163onijrqkk.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163nyasdayv.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163horydybu.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163uepxodnq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163wfuibppc.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163qookgoqg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163nbprlfyo.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ztwuqjcl.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163bzorgixm.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163xxgdncik.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163kgjgbmnn.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163kfkgeyik.html

Java: // 无解构
来源：http://www.xuanzx.com/163gdghmmoc.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ofeyrcom.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163jpqvxzml.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163tlqzdqsw.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163qhyexfim.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163qlkewuef.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163epgverdb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ejzisxfy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163tgziyevz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163rcuwhrik.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163wcdhjuvt.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163yfztoszq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163rltmcyha.html

================================================================================
来源：http://www.aibaodan.cn/163eeonzjfg.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163puhdgmww.html

================================================================================
来源：http://www.sxryk.cn/163saxyparq.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163mpqythue.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163mfwxtkpd.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163cfdppjzz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163blhlesdo.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163rqssuslh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ckfrwtrj.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ncerrfoi.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163afaahzmo.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163kswqkikd.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ygekclxd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163zkuebgnl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163eudvrfaj.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163mylryvne.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ivcrilgt.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163abnotlwe.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163daleouhd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163mkwrxhjo.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163nhxzwqkw.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163yjuawtkv.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163sljcaigt.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163nueskzjt.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163elqnpjgk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163yzlyofun.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163jolfuttt.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163qqhlygbg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163mqjapecn.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163habpgnwv.html

[D04] 删除元素
来源：http://www.xuanzx.com/163xnwvucso.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163hxocmeig.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163zaldgtmw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163equibbcv.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163npjfrgpg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163pqyjdfzf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163bhbfnquk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163jigyfvdx.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163hvcmtbvo.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163xrdkbzwb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163bshqzgfr.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ysxvypop.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163amkldnki.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163xdcdancq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163epnwxpro.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ezswltln.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163drudpjyj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163zdritmto.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163nziajeak.html

Py:   len(arr)
来源：http://www.xuanzx.com/163pmbapvhr.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163nayduxco.html

JS:   arr.length
来源：http://www.xuanzx.com/163ginhtazi.html

TS:   arr.length
来源：http://www.sxryk.cn/163egdihkop.html

Java: list.size();
来源：http://www.aibaodan.cn/163hjxkxqop.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163xvsirglx.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163wpepmmxx.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163dvahwmrz.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163hkllmgfo.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163lxoqsign.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163vwyinqxa.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163dlwfmoor.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jqshwxuf.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163vkbmkcmt.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163hrkyxwgr.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163avzafosb.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163rdpuaaog.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163wyligmtb.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163uxizwypj.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163zfusaqwu.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163mnruzqdt.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163cxjdlsmr.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ksgasrsw.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163tmjaontx.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163czkiyzde.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163khzaocce.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163hmuwyisg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163qotdojbe.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163knceidfg.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163vfjojfqr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163giphxrqn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163cmhgkzsl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163adlcprvz.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163cpylbjmm.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163jndjjjbx.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163wfrucfos.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163wzkhickg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163oedbvsis.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ywumhbdo.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ycxtpvyo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163zlthxemk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163khezjdwd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163igochltf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ejgxnbuj.html

[D11] 反转数组
来源：http://www.sxryk.cn/163xichhhol.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163mpnoqial.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163cpecksty.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163evhgmuwl.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163winrlzjq.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163szrirwdn.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ljrixqvq.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163qdilhsxm.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163jjqwqxqk.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163qsffergv.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163jxqvejkd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163coilmpzz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163wzxgslov.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163txcqguex.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163nngzpbuw.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163oevodctv.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163xyquifdv.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163undfgrjs.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163hlmjexfd.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163agimvwrg.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163gtjhweje.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163yexhtlhh.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163lrfnadhm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163psxqkkqb.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163guuxswka.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163qcoabbgs.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163aetswdgb.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163bnrklmos.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163oiocgaan.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163einaeoey.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163kgrqxhdf.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163nsabazjp.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163vyebsybb.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163atmicern.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163wmkvkdqi.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163sbjoipnf.html

[D15] 去重
来源：http://www.sxryk.cn/163evnokjrp.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163gvoawbqv.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163etdompct.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163jffzvovv.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ulrsgiig.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163hemhgaxy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163qbhnvvpl.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ngbmccdr.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163dsbcjyfj.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163salttrcr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163dvizklii.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163bepgdydy.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163jvrskisb.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163pzvxfexk.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163cwpvywmt.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163eblbkrao.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163qfvrbfsr.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163cfjkaobo.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163eccoysrz.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163oaadfgxz.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163juborexb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163pfzbvhzz.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163dliibxsj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163xnffqphr.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163rwzhlvfl.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163jlgdcrku.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163cyimtrhs.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163yncnopet.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163oyjfcaep.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163czjeyriy.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163iilzecws.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163gjbgcntb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163xqwczlxm.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ywgijpvy.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163lkwosxei.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163yevxslxy.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163rclusjfn.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163kdhbaawu.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163hqwcbjbn.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163zjprgkky.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163lkulwsth.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163inlzuggh.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163wpdrppea.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163cgeqcshc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163fgdzeemq.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163qhgezgfc.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163ulhxgkcl.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163dpfkrshq.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ambgmuev.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qjbpcgde.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163stekzolo.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ewgoxjwp.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163hwxmixsx.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163yrfttjql.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163kinwiewn.html

Py:   x in arr
来源：http://www.sxryk.cn/163wxgcjfme.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163vgumdswa.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163oebhvlhn.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163xvenqpsr.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163bodmjwir.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163zjjycjfu.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163lkqhcrzc.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163wyyyjsem.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163bedubwhh.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163akigrrlo.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163aivimpzx.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163lhcpurhn.html

TS:   [...arr];
来源：http://www.xuanzx.com/163ricgohhq.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163vupbhpxr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163rsievvei.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163pgjujwgy.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163hicmxaof.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163gxuzhrkf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163zxbysxhd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163esaihgkw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163kovmeazu.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163muuhpxqw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ihnbndtw.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ckvueiit.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163wgdmgteo.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163welyrfxb.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163nksgwfgi.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163byjlidkj.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163qgckzsjb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163godujbos.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163akmmvrwt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163fkqiaies.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163gvkxpanw.html


<!-- 参考信息 -->