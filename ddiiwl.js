外链999!wailian999！

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163faznlttw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163eubupknr.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163srolpwzy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163twpbtpjf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163tjkhbhsv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163wtqnozcd.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163tqmsdqam.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163tpjijrtq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163hinenisb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xtvmoxlv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163zcoqyfnv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163kzgzqdok.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163pvtukjyn.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163sbirwbaa.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163arwnnrrq.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163rnikiugh.html

Py:   return a, b
来源：http://www.xuanzx.com/163tylvmkdw.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163mfldfjbu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163jykygdwa.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163cmtnaezs.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ohmjqbdv.html

Go:   return a, b
来源：http://www.xuanzx.com/163elxpeuuk.html

Ruby: return a, b
来源：http://www.sxryk.cn/163jwwystsh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163xrpsmgyo.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163kvdcletw.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163ipotxdfv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163itheetew.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163fkvqhorl.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163inhxsbnk.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163pnjzbjpa.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163vxouqwyc.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163fcdacaco.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163mvnxovyw.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163rcdtexwg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163guxjyhsc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163wnbkxcig.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ecyavvyh.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163undolsty.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163kaehaeju.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163efidypda.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163hhtuakfw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163kymzlvpb.html

[C08] 闭包
来源：http://www.aibaodan.cn/163rpknjkzc.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163vcsmuxbd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163olpeisff.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ymztdnfi.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163irelzyry.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163wcynhjnn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ugiierch.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163hcblxrmn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ryjgqhzu.html

[C09] 递归
来源：http://www.sxryk.cn/163bmikyvig.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163axcfgfce.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163fhrzdjwm.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hxkxlmtk.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163yllhlboi.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163cvonclwl.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163yrnsmcsk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163oppkkwxs.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163plizbctz.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163svsgtfuw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163ygrkjmsz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163ukepmqua.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163qadebboi.html

TS:   同 JS
来源：http://www.xuanzx.com/163yvjlogru.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163hgwnfwtf.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163vonfuawq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163hkkferxk.html

C#:   块级作用域
来源：http://www.xuanzx.com/163acltrxmw.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163oeqvhule.html

Py:   from module import func
来源：http://www.sxryk.cn/163ppzcirfz.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163novtwofb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163dshmdafs.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ochbfwri.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163kmpkgguc.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163xwzqgyry.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163ipvnpnmm.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163uuwxnfrs.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163wcajgbyw.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163cgvtqivu.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ggjfscwx.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163dsvfgwnd.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163jxajaiwa.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163awrgcgqb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ucxgmgjq.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163xtmzfnyb.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163atuwseyu.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163lnuklseg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163unhuvshv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163kxgftpvi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163rouhxphr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ljplksic.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ilwiquns.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ktwoioqq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ccderugr.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163zbmcsxwm.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163txunzntu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163fosaqfgh.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163jugnikjv.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163zctcuckp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163mhmretew.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163cuiripmo.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163yohxlevu.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163hqviilro.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163kmpmigpp.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163cstpwsag.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163wvkpomgb.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163dqrcqorz.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163umamggly.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163usbniyxk.html

Java: // 无解构
来源：http://www.xuanzx.com/163ofvnzsaw.html

Go:   // 无解构
来源：http://www.xuanzx.com/163awldzbhh.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163oeqpwfrt.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163xpsjizxy.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163pyoidnkr.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163gitzqtry.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163xtujrxhx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163vccwwqaq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163mfbyknmw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163toyijacx.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163juecgukj.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163dsxnzxoz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163sydeqnfi.html

================================================================================
来源：http://www.xuanzx.com/163xlbdegkq.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163oxyuofvd.html

================================================================================
来源：http://www.aibaodan.cn/163upfaqyhn.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163wixxdxwd.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163lukmlprh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163iwzkpwev.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163qqfgqlif.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163pbfwqtpo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163znqcbytq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163jypmrpuk.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163qmdhvdth.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ojrrtdud.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ftsegsoh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163opoenfxe.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163kiychgff.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163tjnxkebz.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163bjlisjyy.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163pvtqzvhm.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163rbmhzydx.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163ynvvdnji.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163klpvjemd.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ikdkigls.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163hencrgth.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163qlhupzkv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163tpnrmxvv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163wqgdrhpz.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163sgzrkqsb.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163dvbiypxk.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163lmbuanqz.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163dpagcwxj.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163kpkhjnhl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163xjzvygpc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163krnywfla.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163hnwcrjpe.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163zagbcnvr.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163bbqnlsqv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163adtraxtv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163kiswbpwu.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163mnfcccni.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ftqgtpeu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163pcemjvps.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163zsppfzec.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163fhxkdlmv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163wecyknmy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163oqicdmfa.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163nkrtctqp.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163tmiyugus.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163uvawqpnz.html

[D06] 数组长度
来源：http://www.sxryk.cn/163rovyhwlk.html

Py:   len(arr)
来源：http://www.sxryk.cn/163jyvydole.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ijwqprtv.html

JS:   arr.length
来源：http://www.aibaodan.cn/163rszrrdms.html

TS:   arr.length
来源：http://www.xuanzx.com/163ifbtpbkc.html

Java: list.size();
来源：http://www.aibaodan.cn/163ezpyapsm.html

Go:   len(arr)
来源：http://www.xuanzx.com/163qfxvubqh.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ulphxfce.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163sjzcmudi.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163nisoclwk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163mukitcuk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163rihfwwmh.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ssqveqvs.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163rdqegvxs.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163imykowvi.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163gcrbqksx.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163koybihct.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163jgkyaxoa.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ftvosgrj.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163lxaaxict.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163qecbnrrz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ydmcaxai.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163rzxnoivv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163qxfhakeh.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163cbgbifkv.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ohsjanym.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163vwnrbsxg.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163divlorqs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163iaharwfn.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ovbcrfwa.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163jzxbpbnu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163azfwxvfu.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163knpznmfg.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163qvfjsxza.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163necvgxlc.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163utrxlidc.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163aoaupekq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163lzexjuwc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163hngkbmms.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ctwfdodo.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163timevxxp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163nhjgbasm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163jlhiqoef.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163xfifkved.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163sgjgwceu.html

[D11] 反转数组
来源：http://www.xuanzx.com/163pzgqohaf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163leefeigl.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ngnejywu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163zpwmviff.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163hpgooyro.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163pujfyxnf.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163zeetbsuq.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ywgiqfgt.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163stofnykl.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163youyquhe.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163ozrjkutb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163dyoaedgy.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163jniqniaa.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163vkmxpegk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163ogbccwxh.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163fghjgpli.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163biwlcvag.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163lxlikunx.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163bcvpckls.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ibbqujbv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163awczwwzr.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163voimeael.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163pxxlfnif.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163pwhkvptp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163lekjzniy.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163aorfhzkl.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163smdsffsk.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163cekufcrz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163nsaugywc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163tbgwwgzj.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ixmwvlsw.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163gegxgyry.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163fcdhvhft.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163mumvpchz.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163wfqycgxs.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163szynmoao.html

[D15] 去重
来源：http://www.aibaodan.cn/163dttkitea.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163lvobkclr.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163dkhjdgob.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163wneksyka.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163uhsdamuj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163bqbzmogl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163ycnecgth.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163noixkqqs.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163uriufouf.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163nzahavmn.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163lldfivlh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163kikivmoj.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163wslntkck.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163rqtglvno.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163wtcvehxo.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ifovsrra.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163fqwdvewc.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163gnjreohz.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163lkzpgkwv.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163vmevsxbz.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ijalenym.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163qhpktwot.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163ihnmrbii.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163rtxjtiuz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163phoczozg.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163qoyywkgy.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163uhoyldml.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163nyeurviq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163fetbarwy.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163cgcsquoo.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163sxzvucwp.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ygkipcon.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163iajtacto.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163plrvegnh.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163tuakefob.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163yvvktoan.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163sctjzvxj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163qznplrvn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163zwvbmqyc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163biissmlo.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163xkeshdzc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163zzlvleoo.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163panohjdy.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163maeynhin.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163vfefluyf.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163zrklussk.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ymjtnnkl.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163hxukgpwr.html


<!-- 参考信息 -->