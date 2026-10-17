外链999!wailian999！

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163lsvwhnvh.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163trtsqhir.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163wifufdjt.html

Java: a && b || !c
来源：http://www.xuanzx.com/163dwyekwco.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163nenbrvlx.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ysrwlqxr.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163qeyduhkt.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163nuxwyldi.html

Py:   if not data: return
来源：http://www.xuanzx.com/163qviiwgxc.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163xmputiyb.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163xlwonsih.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163jmaupspk.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163xbcndcnb.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163uinjogow.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163cspcjgbf.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163nfpefrbq.html

================================================================================
来源：http://www.aibaodan.cn/163jiztxtsl.html

C. 函数与作用域
来源：http://www.sxryk.cn/163pcxvixed.html

================================================================================
来源：http://www.aibaodan.cn/163qzedeyaq.html

[C01] 定义函数
来源：http://www.xuanzx.com/163oztyjaya.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163xxxfljmh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163nioozief.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ggqjynqh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163muyalkfx.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163iankaygi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163wuldzwpw.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163zmdmuatw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ydbzligj.html

[C02] 默认参数
来源：http://www.xuanzx.com/163wwuvbsiw.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163cbgrlebl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163xxasvrwb.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163sbpoimul.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163dxrjnqut.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163npuhrupj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163qnqtpmoa.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163sjyofyfj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163egykaaye.html

[C03] 可变参数
来源：http://www.sxryk.cn/163stqqhkgt.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163twvijtvc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163mntlfjrn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163rjavodaz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163dddlyuof.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163dhxdwhjd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163epobrdno.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163aisnaace.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ipktxovg.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163qauuitqo.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163hnazswen.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163qvwucbal.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163afvtqylr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ekdksehg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163qcoyhkhk.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163pimkqaxf.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163knpevmfd.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vsomaylk.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163agjsskcc.html

Py:   return a, b
来源：http://www.aibaodan.cn/163fryvshgo.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163pgjkqjsn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163qzxzecji.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163qkivrrdc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163xrpofyto.html

Go:   return a, b
来源：http://www.sxryk.cn/163vewlpamq.html

Ruby: return a, b
来源：http://www.sxryk.cn/163lychkwjt.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163oabvyiuz.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163xrxjxoan.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163zyimvfsw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163szgvplne.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163njufzxsc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163ouytrxml.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163mxnvximd.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163votkceld.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163dadycvjo.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163tgmzaclj.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163eskglzgb.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163dkaztucl.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163dtgxvdun.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163etapdetv.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163rrgkckho.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163kgryzaws.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163mqbeeydy.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163uxzepuam.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163rpdxzvwz.html

[C08] 闭包
来源：http://www.xuanzx.com/163dctvythf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163klmjqnuk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ztlzkbpn.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mzqqputd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163rvvpqttz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163ztixiric.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163fjnvgois.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163lonjoifj.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163uracgqax.html

[C09] 递归
来源：http://www.sxryk.cn/163xsivjvcd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163qeowdsqw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163hbscleis.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163skmfglbx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163nkvvrmdb.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163opouetke.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ebbynyjc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163xfqhybef.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163wcsufwtd.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163vuhfngyh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163eiheygaz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163flilrkfm.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163qocxtnir.html

TS:   同 JS
来源：http://www.sxryk.cn/163oknspbny.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ebndaurx.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163lduyfpne.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163qwnbwvlb.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ygudjcix.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163uktifmgv.html

Py:   from module import func
来源：http://www.sxryk.cn/163dzlaeuti.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163tjkenmyh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163eihovuix.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163wgombxgr.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163sjwzofvp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163humhsxzb.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163pnnhkale.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163tydzfzgy.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163lzetsozn.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163kmgwkdrq.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163svqsiffq.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163leyhqkxg.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163vtzpmxor.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163xjupxtaw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163uvllyerg.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163ppbxdnjd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163hywgzlnt.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163etwusgxk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ckldmdjh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zbfdiyec.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163byxqtafs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163gereiyki.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zqzcixqt.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163pmlmtpis.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163nvlbolgn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163hkevmyvt.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163uhrkazxw.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163fcsltksd.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163yrotmayh.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163wbzrnurp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163sowdetth.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163ogmuxapz.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163bugvazcu.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163wdosenod.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163tdxvdvbp.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163wnvpdolk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163gvvdiisk.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163sxzxruiz.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ypmovnno.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163bxrosvet.html

Java: // 无解构
来源：http://www.sxryk.cn/163zutfrpbk.html

Go:   // 无解构
来源：http://www.xuanzx.com/163tbeywyic.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163eitkgnuo.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163fthmrukw.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163jqwdwgov.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163wqprjfcm.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ktzdawzd.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163gdyusuto.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163iabwopue.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163xwgrnogi.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163duceuevv.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163sfiusvkf.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163nimidyms.html

================================================================================
来源：http://www.xuanzx.com/163bwwjkcce.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163wmkoxsmp.html

================================================================================
来源：http://www.xuanzx.com/163vyurdjmn.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163uhodeyno.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163gebmpyue.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163fkzlfrdx.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163pdqxaxmk.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163zhdezwxy.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163fkfoeioc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163guxsbhoy.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163uecyvjqp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ghhmjmyd.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163gpxskops.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ilbneept.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163mllptnpu.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ldcdkonx.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163hrxspjmj.html

Java: list.add(4);
来源：http://www.xuanzx.com/163slvttlaa.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163zdkaziel.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ihufehrn.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163zgmzgivp.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163guuiwpvp.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163njlqmxbt.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163zwvajgxd.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163iczrocdh.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163yjpiodgs.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163aywmsgum.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163xojrpekt.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163uhavfonr.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163ffthvqgp.html

[D04] 删除元素
来源：http://www.sxryk.cn/163avqzhszo.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163newoxhci.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163lczuexwn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163vpotogos.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163lvsaswrh.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163yqucfoqi.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163kmpupcob.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163xhtuzmen.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163fxaktbvr.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163bpiqqaff.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ovwczvel.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163uptcixyv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163dozzuwqg.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163gnptntjw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ktfinjzd.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163uvgbuvrh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163nevcwmgo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163vzkyupla.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163lwturaum.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163gyzpooab.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163tfsvgxmz.html

JS:   arr.length
来源：http://www.aibaodan.cn/163xcehalam.html

TS:   arr.length
来源：http://www.sxryk.cn/163lirypvpm.html

Java: list.size();
来源：http://www.xuanzx.com/163zzkxeuda.html

Go:   len(arr)
来源：http://www.sxryk.cn/163eymxhczw.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163xpfrhneh.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163rlefxeps.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163tzjuhjsf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ngveesjj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163pgxadveh.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163qwbzxngx.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163svzmnqgf.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163uchsvawb.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163yehazteu.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ajckshdm.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163qksowpwf.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163osmorawr.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163bpdnvffh.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163gkdtvwcn.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163comkufdd.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163llkqkwfc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163nhlqujud.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163ucjvydmy.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163gfeexvsh.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ybpvajjz.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163wdgqtdnt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163etkzaojj.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163obyumgxi.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163zzjdleog.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163gmydzxdx.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163dzyvrbyq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163enrkigco.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163spcolhwx.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163odmwmgna.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163fvssjhwu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163zuimwacz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163aplkorfj.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ldmaivea.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163orkhzgyg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163vvvqtoma.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163sngvfaql.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163rsreubhj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163xkzpggbr.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163tfecaszk.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163cshzhdkg.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163dzfnlich.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163oxznoamq.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163brzyafoh.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163vorymamg.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163avkipvkk.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163cwjynkrb.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163lxorcltn.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163kqswtjvy.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163votkfdsw.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163pingfwfv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163kumheflp.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163nbjqryts.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163kwtullwv.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163fjtmlmke.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163cjjcomdy.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163pnjjmwuw.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163nwtltmpu.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163idyfldxu.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163weczzycg.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163hwtojscs.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163xrlejpjc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163urtgcqqm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163rbkcczau.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163lyngqkkn.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163vqrjfbom.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163ymuifecn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163zddxuhib.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163vypnqrol.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163hdnbtiiv.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163lumsdzbm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163htgweglq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163dorflvgf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163lveybdwy.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163qwcjzqwe.html

[D15] 去重
来源：http://www.sxryk.cn/163aexclkdr.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163nwahzfel.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163hwoxetfa.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ntrmxmgz.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xpxzijno.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163bxsdktia.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163rpemhiqu.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163hvqtpnie.html


<!-- 参考信息 -->