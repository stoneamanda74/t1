外链999!wailian999！

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163uwbqwzkc.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163cffmakzi.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163kzstkshc.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163qcoipkym.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163bidxjyfe.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163mtrjqoxh.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163bmcohbio.html

Java: a && b || !c
来源：http://www.sxryk.cn/163pygbhsob.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163veyjrilw.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163uhcjcmfj.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163eulatcji.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ueqnmgwa.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163ovmwsxzw.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163swzyagnc.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163zpbbeney.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163cvvgclvu.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163omwxcvss.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163vjrgnhbq.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ftwmtiqs.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163elsdxdyu.html

================================================================================
来源：http://www.aibaodan.cn/163zzactpqq.html

C. 函数与作用域
来源：http://www.sxryk.cn/163hexihisk.html

================================================================================
来源：http://www.sxryk.cn/163piculocj.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163urlhawvx.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163lkofzaxv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fjmlhpro.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163libfcnnp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163yunvfgxw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xllppeym.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163djtiidut.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163fopekccw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jbxuhtgu.html

[C02] 默认参数
来源：http://www.xuanzx.com/163nkcjrugq.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163pigteqfx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163scyrgkbf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163xkqjxkuf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ratktctr.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ecitzojk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163hblondim.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163qvekbqpm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163niqgpgip.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163ceeugplh.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163tduvukmj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163vhxqbmmm.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163uyaiacci.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163bgksnbmh.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163lkerdwma.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163xgdcpfku.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ilokqzfz.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163ujkrvsto.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163adowoodb.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163mhqcafkk.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163tvuilmpk.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163axkbsccl.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ixwrslzj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163cvqvknhm.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163oremnyso.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cmbgghjd.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163nhnotoyy.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163kpkxwwqy.html

Py:   return a, b
来源：http://www.xuanzx.com/163tsjahjey.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163glripbkk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163jspqneur.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163dusmgxrg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ibkrexql.html

Go:   return a, b
来源：http://www.sxryk.cn/163zkeiwsso.html

Ruby: return a, b
来源：http://www.sxryk.cn/163rpbnmvmv.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163iswoxezh.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163fhyisbsd.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163uljvmbig.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163iazptpvs.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163vuotpwoc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163fqhgvcsg.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163fmkmibsh.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163mkabavgw.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163lobcyyci.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163fhvdwghf.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163xobwrtgg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163vqycyjvw.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ijoqkjdv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163kevqutlx.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ghxtsttv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163hliplbxy.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163aeixdzrw.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163mwtwrmsi.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163campihpe.html

[C08] 闭包
来源：http://www.sxryk.cn/163anrkxkbn.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163cyjvvqdp.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163vkyvsywm.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163omleblou.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163aacyhhje.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163rnhzbpek.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163plitjhtt.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163hhuccsec.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163tikfpffb.html

[C09] 递归
来源：http://www.sxryk.cn/163oqxscjka.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163blusujtc.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163npgfzwhl.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163xlcqoryb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163trrycwik.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163rskbfhkn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163hcibgwuc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ltxhmcct.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163geccducs.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163yadgjsko.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163kpaytsjf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163budpfwyf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163yrozxbav.html

TS:   同 JS
来源：http://www.sxryk.cn/163fxgpkgnt.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163euxkvnuz.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ypzlgnnc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163pxlpxnmt.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ailohuuz.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163tupaarvx.html

Py:   from module import func
来源：http://www.xuanzx.com/163vqnofasr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163jszudtxv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163fhdvupub.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163wceyrcoy.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163bogyeuaa.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163xenzsnrb.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163oqqofrks.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163kjslqgqb.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163aazfypww.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163nehlzqxp.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163cncyrnoj.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163wxtvlgin.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163tvogdper.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163yfhjtupn.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163rjeuzeyi.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163mxxuhlwp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163cupcjvtq.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163uivamknb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163buamhpia.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163pmumghdm.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163lrmkqnan.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163yehxmnia.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163asaqtnaz.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163xjnorbkt.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163uanvnrde.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163nphxytmm.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163egamltqa.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ybpjqzui.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163asyxdend.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163yjwcllby.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163nvmagput.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163xmsqsmug.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163qbngsuos.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163gwepkgog.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163qnqhnpfw.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163kzuzlqgh.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163oouobsna.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163rqfaqwdf.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163nmjwhduk.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163huemvtxo.html

Java: // 无解构
来源：http://www.sxryk.cn/163guzydjcw.html

Go:   // 无解构
来源：http://www.xuanzx.com/163vhncmayt.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163kqicsntk.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163vfcuomzh.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163rricokfw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163llauptny.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163efwukviz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163tyanufnr.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163dnndeaob.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163kgnddnlo.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163iglajbac.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163pynqogmi.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163brrjfedo.html

================================================================================
来源：http://www.sxryk.cn/163drrlwwky.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163azlgnxdn.html

================================================================================
来源：http://www.xuanzx.com/163xwkmaxsr.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163upyiytqs.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163sgtksaff.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163xfvbpgfj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163hhxnlxab.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163kyujxqas.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163qvszxrix.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163qqylcfgc.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163zcofqsun.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163dvqsenba.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163vmkzzpgs.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163jsgzfeuy.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163jjoenkxs.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163hdzsweyn.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163lpvkugab.html

Java: list.add(4);
来源：http://www.sxryk.cn/163lmcfmioc.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163hpwocxrp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163aypudrkn.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163taiknqzf.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163thwtoscd.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163jefkswkr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163yxvsamjk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163zxmzjmhb.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163pgdpbydk.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163nyrlrgeq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163fhrnbiwc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163kosuwevk.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163mcxklpwf.html

[D04] 删除元素
来源：http://www.sxryk.cn/163qrbipzew.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163kzvqhjjl.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163pwgdnxtf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163fghnvxvz.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163ioailcys.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163twnaqdza.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163ywefpziv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163bvptxdub.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163pnxlprfo.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163jifpertc.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163dsnfnxpz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163kpykpifq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163kleeuool.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163rpvxfouy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163tfahxazo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163qwcewlma.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163shkxgrbo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163wfeqvbnw.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163tnuhtavv.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163xhuxjfgq.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163vfqsoyvn.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ojdewhst.html

TS:   arr.length
来源：http://www.sxryk.cn/163mennsbqt.html

Java: list.size();
来源：http://www.sxryk.cn/163nrbxlfdb.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163pkhixfjm.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163snuqsycf.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163avckglyw.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163yrcshmux.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163fxdrciqc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163whgijmac.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jvpyxqoj.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163hotvvvli.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163yafwdtqu.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163jjkwgvyz.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ygyeshiu.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163xsfvkeyw.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163wfswtcee.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163hxzvpcce.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163cteqrorm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163hjpcstzl.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163jmlkxxrc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163vjagqtyd.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163obowdzea.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163bopxzycr.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163bcmibupg.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163jlowrdff.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163noftegcv.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163mhsaamrn.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163icdsqkxd.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163cjgppzms.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163lzppxfcr.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163kvwpecuf.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163rzztzebk.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163ntrulvqe.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163kugqwjwr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163cntozfrs.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mgzwvobh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163kuagvjkw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163qkhzrmun.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163mvpfgqxk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163finerrxg.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163fqwzmmyi.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163cixzlyda.html

[D11] 反转数组
来源：http://www.sxryk.cn/163yktzvoca.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163kodozeyt.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163vwhrovjy.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163apsxwlzu.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163yagljetd.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163vxtlfmsn.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163lywjabwd.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163gtmvrlxi.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163nnzypxqt.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163uxmqpzkj.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163nypdaxjg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163eogoukos.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163byskyrcf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163rmwqritm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163donmusar.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163xwcviavn.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163xozxoxze.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163fitkqfle.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163irqejdus.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163uwrmxutm.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163dljgizvp.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163xbpshmwv.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163spotmjwu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163inoprhlw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163gtnpvryo.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163jkqpbzgo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163tdegobsb.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163tmysjrqn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163lkbcjlho.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163byzmzgnp.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163iuqsppxv.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163jsoscuvd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163qlegvoib.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163tqfzjbjr.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163cwaoorqm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163vbwqeulj.html

[D15] 去重
来源：http://www.xuanzx.com/163ljywcljb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163kxzwkmhm.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163vbwiemua.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163bafgoptl.html


<!-- 参考信息 -->