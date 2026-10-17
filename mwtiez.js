外链999!wailian999！

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163tfnddgzu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163cabpzuid.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163ovovwfnf.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163muhjoecq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163acxwfitz.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163wzesbexw.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163slftdrvf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163awmrfufs.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163sedqorvr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163adsucdhp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163eiznjoob.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163ozdndvqu.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163epajcyco.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163eemmorjb.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163plwwdnku.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163wdqvdrhq.html

Py:   return a, b
来源：http://www.aibaodan.cn/163termwuii.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163wodzqmrq.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163jdsywman.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163melixstn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163lairjyto.html

Go:   return a, b
来源：http://www.sxryk.cn/163kdfbxlgh.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163fzewswdc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163tfeahhfw.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163nrhofiks.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ffpvrksa.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163uvhfokfq.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163exoswwkx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163ekpjgmiz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163koxxznoq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163warurccr.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163gvvajkvn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163redczobk.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163myndpjcl.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163japigxhs.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163xovgkfob.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163gpebmdvy.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163nuicqudy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163qtpgiukr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163qywialel.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163drmnhkbn.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163zazdrski.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ojnfbahz.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163jnmesikp.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163jgcgnbor.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163juotmsxi.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gwgkfjxl.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163vdnmcweo.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163owrodiyc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163toolugda.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163qozqtyjx.html

[C09] 递归
来源：http://www.sxryk.cn/163fhdhvrfj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163enoqcpqz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163wntvxoqk.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163vhiygftk.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163wmdopklo.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163vnthnkkv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163cvdpjioc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163pkhuwtdj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163pnjaexpo.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163aihxjjev.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163hofqtrqj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163oomawmyo.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163nbsaekqv.html

TS:   同 JS
来源：http://www.xuanzx.com/163xopvjnaw.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163nzxhvkpo.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163nobsrsrc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163gribhnnu.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163euihhqqy.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163paodnqpu.html

Py:   from module import func
来源：http://www.aibaodan.cn/163zcphxmls.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163hfkeacvt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163qpxdawfx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163qoagoxfr.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163piwwllfz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ysbuhlng.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163pfvqrtqj.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163fedkkxwt.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163rvvnjegy.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163jlnetfoy.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163lbgikhsc.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163klwkcxdt.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163anhzjmgq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163qnpsbpjf.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163nzqfuxet.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163bpfstcbd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163mfwttwdg.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163vfeglpyc.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ettolopz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bvandhku.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163yoqndrlm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163jwcychon.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ihiodaii.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163evxyvwhi.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ypyucaib.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163zgeuxxjb.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163gelsrfkt.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ycragfhr.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163vmyknmfa.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ojmorwct.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163juadiscd.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163hyynesbm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163ekhhymdz.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163xqfujvpc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163tyqwxvil.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163zsaopema.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163ewnkxehf.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163bozhdrwo.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163uyfdlhih.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163xfmidnvg.html

Java: // 无解构
来源：http://www.sxryk.cn/163gtejxwao.html

Go:   // 无解构
来源：http://www.xuanzx.com/163zdyykvbn.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163ogdzcnyl.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163vdwtwgig.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163ljshmsdo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163adpbrmpn.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163twexunap.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163acwpzrhj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163igylttnw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163uolyvxkp.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163lxnjilrz.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163vbbetumb.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163nqccsdxo.html

================================================================================
来源：http://www.sxryk.cn/163aaklowni.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163hbpmxfft.html

================================================================================
来源：http://www.aibaodan.cn/163klreggbv.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163gsompmja.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ymaykcvy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163lwpbybct.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163ldsbdkwy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163cbjpklis.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163lddjyinu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163uogfvgnv.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163zxnbaoqj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163dehetrbf.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163cfgrtimi.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163pozwfkgy.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163crptjkad.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163edgajadt.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163lwwvduwz.html

Java: list.add(4);
来源：http://www.sxryk.cn/163rplypvja.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163dywptivw.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163lfdfltcg.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163bnxqqwkl.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163njhdxprq.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163bqyxnhzh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163ungycrbi.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163pqxviegb.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163mqsdbbgf.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163jknvjsgn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163rtdmeilo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163anziokjv.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163eofmjifh.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163rawtxdld.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163kbbrupyf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163kxcxdpsq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ykvxcpur.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163qucxuowp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163bxkkhoyt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163xmyryuho.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163uqldlixv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163lmartacs.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163tghgecst.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ygfhoxpt.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163dsgwijlu.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163kzqmxiqk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163zbhtvxxu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163qcqntkmq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163jqjzdjxh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163qqlqawbw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163pimgwjan.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ffaclgqm.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163dzwrtytn.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163uqfglkzj.html

JS:   arr.length
来源：http://www.xuanzx.com/163nneshwhi.html

TS:   arr.length
来源：http://www.xuanzx.com/163uzrluxxv.html

Java: list.size();
来源：http://www.aibaodan.cn/163dzlijwqe.html

Go:   len(arr)
来源：http://www.xuanzx.com/163wrevnkhd.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163hkyzbbxt.html

C#:   list.Count;
来源：http://www.sxryk.cn/163zityidda.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163vbiytuxs.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163wfdzcidt.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163vkqpefkg.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163rwfugeiq.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163xghtrwin.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163fjfdacig.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ncvcygab.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163irzsdvls.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163iesthxqb.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163njaavzmm.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163rbsnfaru.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163dozuewec.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163uolvqymg.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163oijofkai.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163muqpfavl.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163iiulkjcq.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163uyvvixgo.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163eixkxofv.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163avgcevle.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163acmkgcrf.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163xhfkyxwn.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163lxxehcnl.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ctqkrofk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163yvwcpzbz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163jljlvlfb.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163nrtznahy.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163crppfusf.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163kdjrklqk.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163tgqqaicz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163bbdijynw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163kyzvjkro.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163abwgkciw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ftmsvcyk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163embhfjrd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163qmppedjb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163irknvipn.html

[D11] 反转数组
来源：http://www.xuanzx.com/163kuwtdyvf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163lugcfvmw.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163hdbqnfyd.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163zjlvzpgf.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163wkhktuys.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163octltmfi.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163qdbwgpmq.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163peuyzdpm.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163mnbyaukf.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163xkcklebz.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163lirlvxlc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163akrbhdiu.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vxdrqqwk.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163hofpfusm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163bqkliltj.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ezolyupo.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163osdkyxan.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163eyxqbxau.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163unepnqeo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ggctbwxh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163emuvparg.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163clfqmtln.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163hskjlahq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163kixufvfg.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ohyiulii.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163lmmwnupe.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163xrmnaimy.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163zkqdbuqy.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163aciuoikw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163pmzhgpmg.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163kgcplxrd.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ommzzgrc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163oknwzbcr.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163qztrivip.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163soiyxetr.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ixatffik.html

[D15] 去重
来源：http://www.xuanzx.com/163ftwopwos.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163mwgofjcc.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163exiipbrm.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163iavtildv.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163jsauiqem.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163ikfgardp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163ysqeuumt.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163rrbgzbur.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163hgcbxsrj.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163cjojsfdl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163uuotuipm.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ytxgrqzi.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mxtiwtuy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163eponbhjr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163svluxkcm.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163apdpsong.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163jnnepmqh.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163krwkwdpw.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163uwhbtfyc.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163xtdujezy.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163hxrnzrjg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163duommwae.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163lqmlyjis.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163yxixljxm.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163qfegdpap.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163kmzwnepn.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ixckrvln.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163tsnpbdpz.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163tiokwdka.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163exlaptps.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ffulbjua.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163hxvhkgrh.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163elymgeub.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163waxhcczz.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163vxmpetim.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163orkjjuhd.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163naxsjbuw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163dizusafs.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163zbyietni.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163mhvpyyac.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163wijhciwe.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163dfzbnoms.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163iexdgtjp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163zammhtyi.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163qndkqldr.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163lpndqahp.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163fbiznnsc.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163nkoukelm.html


<!-- 参考信息 -->