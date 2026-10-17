外链999!wailian999！

Go:   a && b || !c
来源：http://www.xuanzx.com/163fnjdvnek.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163mcjwhthj.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163jkozpenh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163kzabipbm.html

Py:   if not data: return
来源：http://www.sxryk.cn/163vvjgsqbo.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163lzuqxexd.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163xmjsdsjj.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163qumqzouh.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163cizfowde.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ujghcauk.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163kddjmutp.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163wvonicum.html

================================================================================
来源：http://www.aibaodan.cn/163wfjizkfg.html

C. 函数与作用域
来源：http://www.xuanzx.com/163nioyygxd.html

================================================================================
来源：http://www.aibaodan.cn/163inhdlawy.html

[C01] 定义函数
来源：http://www.sxryk.cn/163oyxczsoc.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163xiwyusfa.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xvnhbekk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163jrxnidvo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163gyfyhcfw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lntambbk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163bpqzrvgm.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163igjnjhrn.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fvjtimvd.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163nxkzfsxq.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163rtblpddj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163psyxwjcb.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163rznrijzk.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163vrtolyqz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ytyehvsg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163tuhbbqon.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163zfrkohcp.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163afqsaaoi.html

[C03] 可变参数
来源：http://www.xuanzx.com/163axcgtkdu.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163qvogaxgq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163gsgnsyas.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163mfbxejkp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163lvyhmfsk.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163ahxtwmxk.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163pnhihtzr.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163gjoegogp.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163cipidrqe.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163uxypthkt.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163affpgpgq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163gpzxjlox.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163dkhlwrlw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163kgprbixt.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163lexwysyh.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163cvfzmknn.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vegekxvy.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cjgpnvii.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163tchjnmxk.html

Py:   return a, b
来源：http://www.xuanzx.com/163vwucnwxm.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163azloocdo.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163pkhanewj.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163vzasgwwd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163bujgzyny.html

Go:   return a, b
来源：http://www.sxryk.cn/163jxyzwsfl.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163xsqeuyuk.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163luywifnv.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163yzneugwz.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163wfpphfys.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163imugxksf.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ariwnibc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163zbxilega.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ltuttvfz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163xxmbilit.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163pblkwelr.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163dilxwrew.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163fmuzhwvu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163hkrmrfzw.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ultptwko.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163elscykel.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163zpwaixll.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163fhndpypc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163wshepxwg.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163gdfrlzfr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163jqsgvmkz.html

[C08] 闭包
来源：http://www.sxryk.cn/163brpftsrf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163besleibk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163dnqkiqki.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163mnjzflrq.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163heopyfbc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163uygvtzmb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163mvhkumyb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163qveywlvw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ohlzlcqm.html

[C09] 递归
来源：http://www.aibaodan.cn/163qnmpwehp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163sictqnqz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163dpgexpsx.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163umhlwzbg.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ekzcicow.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163gqulxaup.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163vlbbbmaj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163njgxysge.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163qlvawtwu.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163pzbabfah.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163libtozpn.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163lsrjbxia.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163szbmhleb.html

TS:   同 JS
来源：http://www.xuanzx.com/163zbgthzlb.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163apjkrmiw.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163fedhgtdd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163bflawndb.html

C#:   块级作用域
来源：http://www.sxryk.cn/163enwaplve.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163zhyjunfe.html

Py:   from module import func
来源：http://www.aibaodan.cn/163dukmvxur.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163rmkouuiy.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163eqousvfn.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163yjsadsxk.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163rundcayz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163skanrugf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163wjtmohkc.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163jcexqtxu.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163hoqngjnj.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163ffbqwwht.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163qioktogo.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ajffcalb.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163abbhyahd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163vuruycxk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163oypkvtgk.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163nwsmyqbb.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163zgkzvwpc.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163kuxfafqg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163byybecaa.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tcgakueq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163hnorgojy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163xcbmzivb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nxbeobcq.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ujzfqdnt.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ukbyesco.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163rfrsujpe.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163mcfpcxlt.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163coipasnr.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163bcvvvjxh.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163amgfwmjg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163qpynului.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163ijtpdytf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163qocrgdgq.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163hnnxrzzg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163uhrsihxx.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163esftyfsg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163vdbkqbde.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163obgjtupy.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163nvekweqd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163pgepstdl.html

Java: // 无解构
来源：http://www.xuanzx.com/163kizqjpoi.html

Go:   // 无解构
来源：http://www.xuanzx.com/163xmkipthe.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ostbsvqb.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163kmcnqyiy.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163lizqrxml.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163dpxpktgd.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163gkrszrml.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163utzfyhet.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163dczpsvfo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163qqawcspx.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163fnjzyjhe.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163bvhppory.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163thfwzine.html

================================================================================
来源：http://www.sxryk.cn/163fgstrpqf.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163nsmjrlwl.html

================================================================================
来源：http://www.xuanzx.com/163xsffxcsm.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163hykroire.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163rlzppdhr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163krbgmxjt.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163zxsmwaqv.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163nrjttwxr.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163ngvaqnay.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163cqjtkhld.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163lsowruwe.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163qsrewnpe.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163zrmzpzzw.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163cbwyqbna.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163fetlgtok.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163kkjjmwts.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163zperbsdp.html

Java: list.add(4);
来源：http://www.sxryk.cn/163odiuaczv.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163gngznaxi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163vxiugahn.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163tieotkdi.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163scqonkby.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163fhgjdvrq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163trhybnyb.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163tinjiorq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163efjsbxkb.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163yrfuagxx.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163nilgdeuw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ndvtyeof.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163mmnmnsqr.html

[D04] 删除元素
来源：http://www.sxryk.cn/163squbwgvq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163nejasumn.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163qwuemrvj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163vdpqsdss.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163rskjkzqk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163kdbenchr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163vrayrgdq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ngglyiqo.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163xtzazmuv.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163aholrcgs.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163tpokhxjc.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163njvscndm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ebwtdjln.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163egbgzill.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163vhqnaynm.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163nyunznxu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163azjiazny.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163utbmiolz.html

[D06] 数组长度
来源：http://www.xuanzx.com/163gufwwqar.html

Py:   len(arr)
来源：http://www.xuanzx.com/163lzmkdebo.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163agntvjmi.html

JS:   arr.length
来源：http://www.aibaodan.cn/163lgeqjdnz.html

TS:   arr.length
来源：http://www.xuanzx.com/163ugkzqksm.html

Java: list.size();
来源：http://www.aibaodan.cn/163kyhkzxvk.html

Go:   len(arr)
来源：http://www.xuanzx.com/163lidftyeu.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163uprqyqdq.html

C#:   list.Count;
来源：http://www.sxryk.cn/163awfjitgv.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163yarbdbnp.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163oguogccq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163qzaghnwx.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163bjxesheq.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163xjlesfjw.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163vgxtjgqq.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163zteljeky.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163iutgdqrt.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163uqvrladt.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163dcwrysjv.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163sekoesfw.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163aoepznom.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163vpnkicxd.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163pivrcvhi.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163lpmnyjdx.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163ipxxcdwr.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163xugfdddw.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163apbozlmn.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163hylvvciw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163eiluvkwl.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ksfaeuot.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163wyzivomo.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163kwdegrdg.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163wfinkehm.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163qlriuqoq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163rudygxli.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163jvvvwfvs.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163jqtjgeqv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ptusmimr.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163yqvqxezu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qenzjpmq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163rhmoewnw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163xozqknbr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163cmdmaplp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163xsxvnmod.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163hamxnhzc.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163bgbaugwr.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163cjnmtugs.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163qtqnhgsk.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163zrwsgmym.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163hugzpruy.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163axzyuhdd.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163fbmnttlh.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163sugsqdct.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163waudmuao.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163smhtqdjf.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163jmumbwzq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163bizbvdje.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163flptopsr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163pvlixtip.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163xngjcnuo.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163bushvxji.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163hxccluvz.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163mjbtscbt.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163sxehkoiq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163cbdftiii.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163huawzzlx.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jrppstvz.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ljqvhrad.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ujjawfay.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163sfhlvcxi.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163iddpfxmr.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163hbvvhpuj.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163hcituioi.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163zdxxfbsf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163bmhbtovd.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163pjwdgvkq.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ntqqqzma.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163axqcpksl.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163dfhszxur.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163fcqwfvbl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ukxxgvgh.html

[D15] 去重
来源：http://www.sxryk.cn/163bqbjjbpc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ghtrooxo.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163zwohquxe.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163xrpxgkly.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163kipkhtmd.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163hvobfair.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163aefaenao.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163xsknmcau.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163vqlqqudl.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163zblpgror.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163llakempc.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163vcoxumko.html


<!-- 参考信息 -->