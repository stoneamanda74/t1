外链999!wailian999！

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163glbgqdaw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163herwtmzv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163cvrgnnyv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163pfhuaeac.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163tofwqbxo.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163mmaoqnuc.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163pylsuwil.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163cltzxhwc.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ohczqvdv.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163dswvadme.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163hfaahwjn.html

Java: a && b || !c
来源：http://www.sxryk.cn/163mptljice.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163smjtkjfi.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163whubxcvy.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163vykiyxue.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163lwmvvjtv.html

Py:   if not data: return
来源：http://www.xuanzx.com/163qtqaiqmf.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163akcuuleu.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163tfbncikc.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163smwmtgsv.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163cqaukqei.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163grmzydgc.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163gwrxhrtm.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163jxxseixe.html

================================================================================
来源：http://www.sxryk.cn/163kmtlnphm.html

C. 函数与作用域
来源：http://www.xuanzx.com/163gtscqxay.html

================================================================================
来源：http://www.sxryk.cn/163qjhcwgpx.html

[C01] 定义函数
来源：http://www.sxryk.cn/163htdncnzo.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163heaaejio.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163munyuvdl.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163xkyuduqs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163fpjggfwn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fbygdcdr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163uaxxilsm.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163jxcglqtv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163viuhdzlq.html

[C02] 默认参数
来源：http://www.xuanzx.com/163gwwmsypl.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163uorjtthk.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163xgcbzglk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163pamohbsr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163zhqqxjrr.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163lmygcput.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163srnvenpo.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163zwflunbj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163pwrsjvxp.html

[C03] 可变参数
来源：http://www.sxryk.cn/163kdkggtus.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163dqpnmtkf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163dsygxxob.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163wtgrgros.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163yjiwlpgj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163jhzlbtty.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163uiiehbgc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163zlhrhvwz.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163nabhfdbu.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163vlvooaxn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163leciigbq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163kyggeoaw.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163sblzlcmu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163peyyhxpp.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163nriqzosx.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163fltnhupk.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ykzljwal.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jjnlqrae.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163sofqcwmr.html

Py:   return a, b
来源：http://www.xuanzx.com/163nzsvlkrm.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163olxjoeuo.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163tdeeccxm.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163gtlmdoox.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163jsuiovjt.html

Go:   return a, b
来源：http://www.xuanzx.com/163rshkqmqz.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ogfdflqu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163cixslmhs.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163qbbljplu.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163cmcyomrr.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163dqujsbbw.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163rrygicre.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163jtwsnkff.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163qnigzmks.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ysiruzya.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163fvrsufvd.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163hyzgvqar.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163hqozfbad.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163uusijrqw.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163rmgmgunz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163yzkyhrql.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163ucjvcwpw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ntjkubzl.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163dwjlbbfb.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163gcqamzrp.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163wbwjxjdl.html

[C08] 闭包
来源：http://www.sxryk.cn/163ghimzazf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163taskossf.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ytmkdica.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163twausiaa.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cmkrdpaz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163bedbvjee.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163vvresodf.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163krstchmn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163clkgvgle.html

[C09] 递归
来源：http://www.sxryk.cn/163muyiwrzc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163otpxsjqj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163hcdjgtut.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163mjbothes.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163lalbsyuk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163jcadlmgh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ubomilxk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163xvvwxzek.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163fpoibqzk.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163pczubqvr.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163fwkutzyt.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163kbipdeow.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163vxabhzsr.html

TS:   同 JS
来源：http://www.xuanzx.com/163ewknhdvr.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ctffqitm.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163libfsbsh.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163pialeooc.html

C#:   块级作用域
来源：http://www.xuanzx.com/163vfrizakl.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163arxdwpxp.html

Py:   from module import func
来源：http://www.aibaodan.cn/163vtorvmqu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163rodejkem.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ictxgpvc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163aefofdbb.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163vljrkgnu.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163oxalhjvk.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163taplsqff.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163tjthqcrt.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163csqfgpzf.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163jzkbsdvv.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163lqbdiset.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163fecrmqql.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163lmuvudda.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163wmqyrnzb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ghxbchzf.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163jupqcawy.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ajfwzgxl.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163ilwyjfly.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163bqaicxjf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163vzmbadbx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163sgwugzow.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163rehikrso.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163dgkatlau.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163fndxtygu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163vheyzsfw.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163eouxvztg.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163isqhyfgf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163cfvkjmeq.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163xkegwfma.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163goceqrjh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163oqeglmvw.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163gsrgpbpo.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163nkongsfn.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163qavkbawl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163iggafmed.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163vqwlylba.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163qqecfkcg.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163enzvtcbm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ucdtnego.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163epqmgzmo.html

Java: // 无解构
来源：http://www.aibaodan.cn/163muhcfsob.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163malyswjm.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163clxmaznk.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163smvymkjm.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163hwaeqgkg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ximcotzh.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163fhexuryt.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163erprkliq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163dzckayof.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ncogzevf.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163exzlyzjr.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163tppglmwe.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163mxlihinp.html

================================================================================
来源：http://www.xuanzx.com/163bvagcxyl.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163bqxjmirz.html

================================================================================
来源：http://www.sxryk.cn/163ygmrhjfc.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163mqikyqrw.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163skrmpwxd.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163krpiwftz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163zvqgrtrq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163mwthxcab.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163efmvvuwc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163mtakdqhc.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163dmnbzysk.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163nqllpvjw.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163mxnrmvzx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163eyjnpcyk.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163efpmigbz.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163xsfyxkpz.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163noabgowa.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163hacozmfu.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163npaducqn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163aaodjmhf.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163whrhplwf.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163vwcjpzgf.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163gwxkaulf.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163sknuuewk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163thkmuwum.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163bqianvvv.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163llcaciye.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163zeoqzcth.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163cujmhldz.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163cwghaqiu.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163ygnycocp.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163mulwshii.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163khsxwcgm.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163bprkfnqv.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163lfrgfaye.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ytugdrmx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163gkyegzjh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ekpdnghr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163kvyqmbyy.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163vfehxkti.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ogscorpt.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163mtenuvfe.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163jvhbibkx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163zlvrjqqd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163isywkdcz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163mncezvti.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163sjgrmjyh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163mxmydveq.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163xfuxeqou.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163tcyacjwk.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163aexwavka.html

JS:   arr.length
来源：http://www.sxryk.cn/163fkydmlrh.html

TS:   arr.length
来源：http://www.xuanzx.com/163bljjkbqr.html

Java: list.size();
来源：http://www.xuanzx.com/163jroxhgpy.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163xzfuhfkm.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ecytgmfb.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163oixabftu.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163gjkxozeg.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163maftxrhq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163qxpvvkng.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163wawcvtow.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163pqgoghwd.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163eltgqmtt.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163cgnxuofv.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163wttbkctk.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163foaikcrn.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163usyhgube.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163oswugowl.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163fkjamhkk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163xadzfmcl.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163zkibjmiz.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163eujamoye.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163fysuzppv.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163wuvpxhhh.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163jcvbjimd.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163xkflrtff.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163hbwoqycg.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163hpqlnwfw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163luhjuhqj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163gektpuvr.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163wjdndwmk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163mappocxq.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163jglgqrml.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163xxlyyyuv.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163dumirmvm.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163hoytxlep.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163goocjwyu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163famjuoew.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163klkrhpkk.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163qtlnidwm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163euesafcc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163fczmnesa.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163nriogacg.html

[D11] 反转数组
来源：http://www.sxryk.cn/163eabxtwkf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163dzwcbcug.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163kzkqbytp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163cffuxmza.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163lbahnzae.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163fcbkzszw.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163tnfsvmha.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ovbgpzzs.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163vswlcyit.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163rapkintw.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163uwyktdex.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163gowsbkkz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163vayiazvb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ptklnftm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163nvyvhzva.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163cmjgvrgu.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163zlvdfbri.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163lldsyxch.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163fqbbssqf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ayzhdglk.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163lqjrnjnv.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163dazmwmxv.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163qzyqgumb.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163yyfxdrri.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ucfbwbzk.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163xraznasy.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163qmhlbhsq.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163rzxtiwua.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163joltuntb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163qhnhdkqk.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163lxvgunzr.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163zeyoczjx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163dgfvmcdd.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163advuehkz.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163mtkuymhn.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163gkdmotho.html


<!-- 参考信息 -->