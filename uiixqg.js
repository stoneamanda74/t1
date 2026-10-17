外链999!wailian999！

Java: if (data == null) return;
来源：http://www.sxryk.cn/163jnczylsp.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163wmdbpqjy.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163izlhzpjd.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163sshylcco.html

================================================================================
来源：http://www.sxryk.cn/163xtfsdlyr.html

C. 函数与作用域
来源：http://www.sxryk.cn/163uddlelok.html

================================================================================
来源：http://www.sxryk.cn/163dvkpgqly.html

[C01] 定义函数
来源：http://www.xuanzx.com/163adsknfil.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163gldgbmxa.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ardxlxnj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163pcuppgpf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163xgombgsz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163yjqloyyd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163jkxkjisi.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163bgqpytas.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zekrndvc.html

[C02] 默认参数
来源：http://www.xuanzx.com/163uwmmfqwx.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163qkmetpwk.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163rzjkwhgb.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163oazggyqw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163qpgyvikq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163dohelbwj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163dvrnvmtw.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163gtgyetac.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ljqvimou.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163nfglmzcn.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163fjfktqxb.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163bmwacbpg.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163twcsjbcc.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163eseicdgw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163jofdgawc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163ijqlblzf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163erioqnil.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163kirmqtiy.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ulvnzwua.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163lxoirrfh.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163mpqrhova.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163niubqciz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163rnysrrds.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163kmmfkwxy.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163pwitopbn.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163szdbsmsl.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163gwauaick.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163qxjxglxh.html

Py:   return a, b
来源：http://www.xuanzx.com/163tcbouulf.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163pijxtsza.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163embxecot.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163udnalbmw.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163wpiwvyat.html

Go:   return a, b
来源：http://www.aibaodan.cn/163flbjixty.html

Ruby: return a, b
来源：http://www.sxryk.cn/163gjyivrvw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163guypmzqh.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163glcscrlw.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163eqfecgyj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163svpyitya.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163pmzfdofk.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163nlkutdct.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ipchaypa.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163jkmownfw.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163lkxdmini.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163iyqllthr.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163bkxjsyfu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163tzlophsq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ogkcdjdx.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163fjnpfoqw.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163ytcbcbta.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163zieifqkg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163icfolmun.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163wtglszmq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163bdjncjsl.html

[C08] 闭包
来源：http://www.xuanzx.com/163qjfvmmcq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163vbanymkk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163prenhvrx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163rnfwndtu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bepywjze.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163prghglpx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163kchsppxf.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163fwqfdjka.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ulapqump.html

[C09] 递归
来源：http://www.aibaodan.cn/163szwclcrf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163miankpbu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163fseysrfr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163zwyirklz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163jeggnuon.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163xxpudpmp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163vyezxpug.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163ogqizweb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163cjdsxypa.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163rsnamrak.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163vbfdkrve.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ikokpjke.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ntqhzuyv.html

TS:   同 JS
来源：http://www.xuanzx.com/163tmbvovyo.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163islauues.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163mzphaetf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163yiejrqrk.html

C#:   块级作用域
来源：http://www.sxryk.cn/163seixixvm.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163bxchbtni.html

Py:   from module import func
来源：http://www.sxryk.cn/163dyyhwuax.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163msdapzvj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163pgdfasjh.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163omttbmem.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163avioqnlf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163vuxeirur.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163gyhpfgov.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163fyxivgyt.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163elcoamdw.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ffvxhegg.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163osoalowa.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163xksxbqfs.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163qvpvttzx.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ibzkzoxq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163evgrfwvx.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163mslxxgjv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163yyppohss.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163jkeksedi.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163dysjwvmg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zeaupmhw.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163iabecmzw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163sbsikoyw.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mvhkytbw.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ynogurpj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163wcifwxxk.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163fpgeykrs.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163qltwposn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163bdovmihy.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163sztxyecw.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163habdshgf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163kruuzwkf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163sxxjhqko.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163sszrcciq.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163xdzgjdmv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163rawazuhu.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163smtkdbwj.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163slhjfdmz.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163urrzbwop.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ntfflgqi.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163nhkjecxk.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ikhdeyku.html

Go:   // 无解构
来源：http://www.xuanzx.com/163svyompnm.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163rxyeqfxy.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163lumbdebn.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ynnksccn.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163skcfnfsd.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163aqdrykaz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163lfmedkvz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ufhtkmcu.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163nupgpprm.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163dwhmirfe.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163tvifbaxp.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163jjntvbal.html

================================================================================
来源：http://www.aibaodan.cn/163xmbnkxxc.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163qlwpxtjh.html

================================================================================
来源：http://www.xuanzx.com/163ycvrvlkc.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163xmbahnsh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163jolkwohv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163qvcwuoqj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163gbgpxzwj.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ukufnwzy.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163atqtnuiv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ymvgmidr.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163jzemaitf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163ffqzmajr.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163aueurggx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163laennowm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163yptbkmea.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163gacvspkj.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163zkswmnqt.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ibwskfbj.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163abhgmiue.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163hkoovkfq.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163qgkrkvuy.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163rgfwfdlh.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163szuozzeu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163vnkbyztk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163uihgdioe.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163jnpqoznr.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ejblfqqc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163exlmgnuo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163trivpqhx.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163tnnkfxzd.html

[D04] 删除元素
来源：http://www.sxryk.cn/163gixrrqxo.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ayfnlmeg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163lwjjvebd.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163kxrphdvj.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163yezlcmoi.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163luhtfgww.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163woyunrnh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163qyhellby.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163vsxvcxhn.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163lehnrddm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163vduevpci.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163cuasdoiu.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163ktucrhio.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163mbqwtwci.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163vfuvbtsf.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163jmnilpmb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163hwqhlmnx.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163qsuczuek.html

[D06] 数组长度
来源：http://www.xuanzx.com/163vsxtwtnu.html

Py:   len(arr)
来源：http://www.xuanzx.com/163xfrfucqa.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ivgjktlw.html

JS:   arr.length
来源：http://www.xuanzx.com/163aobvdhlw.html

TS:   arr.length
来源：http://www.xuanzx.com/163tihpzpia.html

Java: list.size();
来源：http://www.sxryk.cn/163zxzcbbac.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163doldqvmf.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163nmmipahh.html

C#:   list.Count;
来源：http://www.sxryk.cn/163mqkvaujx.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163wrhdilvk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163hxdgypcj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163chwoilya.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163tanlnklq.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ytpytdug.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163nqkwirzf.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ihnmfrwl.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163zpsmlvse.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ipuzzvpf.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163gvvbeokw.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163fpzulikc.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163dvafkcrw.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163lbnqckpv.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163erovqqkn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163cdpudfkj.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163nmyipmuq.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163dfkxocnb.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163bwnpjacz.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ojkxirtr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163llmkifue.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163misyxjri.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163hdzmkwqc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163hmafkoqi.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163dqnkebje.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163mjjegiuz.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163novlrvsu.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163xxkjvgms.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163jpsobflo.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163dxltepuz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163wbyeonjv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163neggmkfl.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163emoieeqo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163enbliylr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163exflhmju.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ttpjwejd.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163dtjcsqoc.html

[D11] 反转数组
来源：http://www.xuanzx.com/163iviarbrx.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163cqrbjgxm.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163fqyopnee.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163dmwsjkrl.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163alsnxthh.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163wazmesyw.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ewrsrxwd.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163qyngdavi.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163pakkptlu.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163evxzcpcf.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163pkchheai.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163pxyjpftc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163atkymmkn.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163znpbywrr.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163mzklkvkc.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163tpgsajir.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163qubtovmg.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163sltbopce.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163glzihtwb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163mannlria.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163xzudstak.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163yvaogxjc.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163dioxcmeq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163xurpgdcu.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163tjfxqdqg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163yajrlcnp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163xpygsxzb.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163ozooqrxx.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163etdytrvd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163dxqmlbat.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163eeiagftn.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163srjagfms.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163qapelpop.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163cozgoadr.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163tvlrmwgs.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ydevhrps.html

[D15] 去重
来源：http://www.sxryk.cn/163qvmznscd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163meeczjji.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163jnqslfwr.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163hvrvnaxt.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163rkscputj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163uuyumkus.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163huunttkt.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163howmsbub.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163nsemrfaa.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163uvcvvown.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ikcowhpw.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163zstuklca.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163tympgxev.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163lwztyvvs.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163trpwgljr.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163wgtjfbjp.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163uaobhgqq.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163xbhazili.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163trjkvgij.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163tpwbxgzk.html


<!-- 参考信息 -->