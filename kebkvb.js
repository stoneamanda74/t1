外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163vtzyqjoi.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163yrfxjwwn.html

================================================================================
来源：http://www.sxryk.cn/163arhmgjbw.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ltjhcptq.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163tmpmixua.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163rkitkulk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163qwguowie.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163gjxqeszd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xlmvzmzp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163yrloccka.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163aiqkeeva.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163csxxvbjc.html

[C02] 默认参数
来源：http://www.xuanzx.com/163osggxtcg.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163vjkdydzc.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163aeuadwbh.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163cakzmmql.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163gwmmvmte.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163sefewamp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163yqkbxenk.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163rzriuyng.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163nibjjplu.html

[C03] 可变参数
来源：http://www.xuanzx.com/163vykrgfjj.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163qfryqrqc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163phyjykal.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ccdjnhje.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163fvwszjaw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163hysblcii.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ghllujnt.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163qhxuclvn.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163odegjeyd.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163gorxelzp.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ldkuvcdp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163tntgimzg.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163xqwmaugo.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ikfqvzrl.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163svqzpnvg.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163wujluber.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hqlvflpj.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163yelhyfbg.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163gjclscys.html

Py:   return a, b
来源：http://www.xuanzx.com/163njrqonmx.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163onlxrsho.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163htnjuwgg.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163waepnoif.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163gweeujyt.html

Go:   return a, b
来源：http://www.xuanzx.com/163gtvacxje.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163xraeniff.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163fzhovldw.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163cqxmgltv.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163fbsplmzs.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163copqonbw.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163lhplczwp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163cxxeklof.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163saqtenef.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163wlhjhoia.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163cqhitqmz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163eplqjspk.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ipactmha.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163wlcblbvq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163yatttczz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ctnxhcyr.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ljenlwma.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163eliyklvv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163jaxuydpv.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163spdxjqev.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163nkxkakdi.html

[C08] 闭包
来源：http://www.aibaodan.cn/163slsjkqwg.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163asnfyiej.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163etdhhmsp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163evagxdlp.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ytuorlbx.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163fpqauhsx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163oloisrmh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163aielspwl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163kblzwfme.html

[C09] 递归
来源：http://www.sxryk.cn/163kmxmruay.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163mqwzycra.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163xdsxtoqr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163vzzeoqjj.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ehvhnkrh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ihlgzzjo.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163uyfbsjfa.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163vegzfjka.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163coyiddot.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163tlttlmov.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163khbgiorh.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163qtcokjri.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163wdgdndsg.html

TS:   同 JS
来源：http://www.xuanzx.com/163okqghlfd.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163qrgolxtg.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163gfvvbjho.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163txgpjhkv.html

C#:   块级作用域
来源：http://www.xuanzx.com/163nhvkxrfw.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ldyvxixy.html

Py:   from module import func
来源：http://www.sxryk.cn/163kjmooirb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ngmxzoeq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163idhzwrra.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163ihzwnaix.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163hbxgcwec.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163rnzqjocq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163aiswmuru.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163oezuxzoz.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163vveayzkh.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163cuzuifjg.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163qmvyxrbt.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vnymaoin.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163dqulrznz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163yzcaddwu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163zzddoqtm.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163zjojfwpv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163yayhtzdq.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163nggfllnj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ktnaslyr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163icfcmlal.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ekktpumr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163kcgimudr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qvtzlquk.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ozjefqan.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ytkcjsho.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ievsjang.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163tjjxymcz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163marlmdaf.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163capjpzdu.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163fhmxdvee.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163dxfbtemi.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163sirjblkl.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163idlyymmw.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163mvlxevtf.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163xfnmbynt.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163qfphxtsn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163taznmnra.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163tezqgpvt.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163kwoucdqr.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ymuwnbgj.html

Java: // 无解构
来源：http://www.aibaodan.cn/163pgyqvoix.html

Go:   // 无解构
来源：http://www.sxryk.cn/163uycowgxs.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163vdnyzrad.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163paayfohz.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163hdwlcwhe.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163afjdtaoe.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ylmpyshx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163rozqfheu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163yysmtbjk.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163kiidmctl.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163vyiatiss.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163xcutmtwy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163hqcuyfkq.html

================================================================================
来源：http://www.aibaodan.cn/163fcibpyix.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163qmlvwxlh.html

================================================================================
来源：http://www.xuanzx.com/163myvybxhu.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163obfruibb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163cptxadkt.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163ojrnqsxd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163rdvjtyvw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ephiburq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163qvelcgud.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163wzwjscjd.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163whjzwewl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163jnkzlvpc.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163nvgsumza.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163abooiykd.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163feuypyyc.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163kppkhgdj.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163mtuojofw.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163bvnfxfyg.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163mqdnriav.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163omktorqn.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163vqkbnvqb.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ijxdlrbs.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163hhgoeppf.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163uptaayph.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163lqgwmcyq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163plgomlmo.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163okaqvbix.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163kuxzjgdi.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163fgtcnoxh.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163udgflyyi.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163gcarkgnw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163rczktjyr.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163wubmlmql.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ypxjvfmx.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163lilnnrue.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163xfoirfhm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163yqcaicsq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163amttcxhn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163bevygzjv.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163bchobhud.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163dheeaxdn.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163cvbmbgob.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163qdpgyksa.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163ffawxnev.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163quvjmhvv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163eerjoxuc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163fvfckhhr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163keqliork.html

[D06] 数组长度
来源：http://www.xuanzx.com/163txhssgmh.html

Py:   len(arr)
来源：http://www.sxryk.cn/163mywusyjn.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163urweacix.html

JS:   arr.length
来源：http://www.aibaodan.cn/163tlnuvwqf.html

TS:   arr.length
来源：http://www.aibaodan.cn/163kxemakqo.html

Java: list.size();
来源：http://www.aibaodan.cn/163lyukwtan.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ouosupmx.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ptzafatj.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ukfmcwvb.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163eeeokfxs.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163qdcdjvmn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163tvzapphr.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163wctoucci.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163pbfeqdyp.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163oyvuwagy.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ulwdeiox.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163fewkyrcj.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163pdxdcpqv.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163tuhkwani.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163heafkkxx.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163hsfmwaix.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163vpagikds.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163bkqgmdiz.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163uwgemdch.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163hrwulhih.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163qenuyupt.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163bvbzqmoa.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163rotddffe.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gryhedzk.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163xzqgogda.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163xahnorwf.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163sqlbxdcz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163cvthaahk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163okxvfmss.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163udaydehu.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163znqrsuvk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163zvgcpbsn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163hkhceeqb.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163bedriogo.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163zxltvvpw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ucaqmuxq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163dpewgvry.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163errdenuw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163abkofvqb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163jsepeqzn.html

[D11] 反转数组
来源：http://www.xuanzx.com/163zerhxesi.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163fevekkrj.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163urhboqnv.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ewsatqeb.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163lrwyawzh.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163abbaqnli.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163kesgmaib.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163oifxtgmx.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163faefqbbb.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163nptqoolz.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163kmvdtjfw.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163rbqmenve.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163gdlfopbd.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163nmzdgltk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163hlriiwvd.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163hvpkqsnz.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163owkcuuqk.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163flpyjyhx.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163dlgnrohe.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163oriwdypd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ybwqztnq.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163qnocrarf.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ummiilns.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163gowaxwpm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163yowymlia.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ksxxjefq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163xldlwodn.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163fpbsntyv.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163qpwqhnwa.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163jzobaehn.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163vygzdoer.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163newdfgeh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163krsorjlr.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163lchbigmv.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163grzjxmki.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163zckfeqzf.html

[D15] 去重
来源：http://www.xuanzx.com/163ridebsqq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163rvybesbl.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163iewzmlhv.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163jafbnnau.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163zalciraz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163vvqsazhu.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163flyoptux.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163jiyjrjrp.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ptcmfwak.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163hhmygxkc.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163dabljopo.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163janltdov.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163osqgapyy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163lvhcmcun.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163tlkxrxue.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163tjeloukq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163snqvsocl.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ypapbaft.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163fckuawcs.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163hzychaam.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163gkjsfjpf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163mvcfhjmk.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163pmutlhco.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163rtfsytmq.html


<!-- 参考信息 -->