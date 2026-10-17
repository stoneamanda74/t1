外链999!wailian999！

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163gmrodxpi.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163gzjzgskk.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163utizjokn.html

Java: a && b || !c
来源：http://www.xuanzx.com/163pejguptw.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163choxnzli.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163gzmatfga.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163gjgclieg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163lkqryspp.html

Py:   if not data: return
来源：http://www.xuanzx.com/163dmeqjuod.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163hwbjtura.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163qhvrllve.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163qbimzfxf.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163sdmlvcha.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163daiwasuq.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163uyqydhpy.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163aekmtssv.html

================================================================================
来源：http://www.sxryk.cn/163dnztnhcx.html

C. 函数与作用域
来源：http://www.sxryk.cn/163lcglwsxg.html

================================================================================
来源：http://www.sxryk.cn/163nsqfzntl.html

[C01] 定义函数
来源：http://www.sxryk.cn/163uwzmbweq.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163zzeiihli.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163pjxnuhrp.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163mcwtyyem.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163pbibahbj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mblqrhxy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163nhdbphsx.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163uefpmqzg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163thqhyjpb.html

[C02] 默认参数
来源：http://www.sxryk.cn/163nvczlooq.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163miocrxva.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163zochziji.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163gauysmle.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163wtwgbejn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163rohnxitn.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163pdayfbhb.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163zgnabkhe.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163cddvmgzz.html

[C03] 可变参数
来源：http://www.xuanzx.com/163dowovnjw.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163aztwrhnf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163gsvsgwfo.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163yeopaebj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163kgoouaqd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163ywkvqlnn.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ecyqrmww.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163jeqxsyvk.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163qithksem.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163fjkollwg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163zhzwugpr.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163lgtqgsuq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163hvtyvifw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163qiawzolj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ifmfofsk.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163khwdvywu.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ukniqrop.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163nbvhvwvl.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163djtskzrd.html

Py:   return a, b
来源：http://www.aibaodan.cn/163givbzslz.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163djsmkutn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163lyqbynbz.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163qsecipqn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163svjvujhj.html

Go:   return a, b
来源：http://www.xuanzx.com/163tmwpzsmw.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163bopgbhqa.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163yymbdytk.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ithbucni.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163qmospxpe.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163spewayei.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163cugpakrw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163pywskwaj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ipvpfdhn.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163xtpkugrs.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163kgvoazel.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ffwpoksi.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163emygqynf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163irwbecco.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ylqihuka.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163kaagtftz.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163pcoiotqi.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163sqjtwmok.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163pqmenrup.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163jgxzijvq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163rcwzlwxt.html

[C08] 闭包
来源：http://www.aibaodan.cn/163iaffnxyq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163pdmbmvsd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163hywvwjae.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163qxiesqix.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163duitpnyc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163zjyrzwem.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163madtiefv.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163fqwshsur.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ylkpodar.html

[C09] 递归
来源：http://www.xuanzx.com/163rvqlycrw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163udkmgxah.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ryrcbtdo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ihblazog.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163egnlrgqz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163xfcqzjzh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163wzemooum.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163zdrraffc.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163ilvrjlpk.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163vgaiaffl.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163lwzedvww.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163jnifrkpu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163hvhacimk.html

TS:   同 JS
来源：http://www.aibaodan.cn/163zzvvflqe.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163jnvlguid.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163vnsxvidz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163vljdeiio.html

C#:   块级作用域
来源：http://www.xuanzx.com/163hwpwduza.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163aakrwlft.html

Py:   from module import func
来源：http://www.xuanzx.com/163hywgtktd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163dtpftoiu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ibhdatxa.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163pjvsnzck.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163pkhrrmnk.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163hfoeezws.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163edpxsypq.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163hygwbitq.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163phwjkqhc.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163udcdrmjm.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163rjteaiyl.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163dcesehqp.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163wcpamlss.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163jxfffaws.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163yxikxhrl.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163zaiarajs.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163tkzfngbb.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163fdbpugip.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163evrbowqc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163btkyzdhj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163dlzzsfeb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163bccbiowu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vhjsqjmx.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163yuhyliwv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163kzpzgawn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163nhfiufhc.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163mcobeizt.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163gubgxibg.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163ptltutwz.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163waacijfl.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163qcjallzf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163zzgrfhsn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163qhhetgdl.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163nfvujtfb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ohhvvugb.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163zpklyffv.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163ywnqotgk.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163wyfejawq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163khpxtsrs.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163kyttrbeo.html

Java: // 无解构
来源：http://www.aibaodan.cn/163kcfjcfuc.html

Go:   // 无解构
来源：http://www.xuanzx.com/163vtqyewgs.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163rhcqzfid.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163iomxdynk.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163ctctqxbf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ogtiiaik.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163bgusdwlx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163xdbodptc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163wjmqywnp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163yewjsvln.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163gusekfbd.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163lybrfvez.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163hvfcnbdv.html

================================================================================
来源：http://www.sxryk.cn/163fndnzvox.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163rqmtpfcx.html

================================================================================
来源：http://www.sxryk.cn/163anfqymxh.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163fspqzlis.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163kxpzfngc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163guxwntny.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163dqedupth.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163tlbmytbp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163yvhblfnj.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163turydhsz.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163nffwdxfs.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163griszkna.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ctfteczr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ewkbpyjc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163bufmfhgm.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163dtuadtwc.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163sqgeorfc.html

Java: list.add(4);
来源：http://www.sxryk.cn/163kqvcowrq.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163uekdijtb.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163sxwzpaqg.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163xujiguob.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163dgxmzzba.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163fbocucgo.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163vhevyxus.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163edaufcmc.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163rzrwxcrn.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163lbvbwecw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163uqavpuzx.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163pltoiumz.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163yxmwmaff.html

[D04] 删除元素
来源：http://www.xuanzx.com/163lbphzjaf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163ufhbtzfl.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163jwhgyvrq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163xxawlbnq.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163lfylezyd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163atplyqlz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163vozexiwt.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163kkpcqdyd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163kejzlcle.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163etvxvckj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163vtghuvaf.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163kpkbfkem.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163wcvnteog.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163pflvmfhp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163lxsuaxok.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163paakrdeu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163usuiowjc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163wxvbooab.html

[D06] 数组长度
来源：http://www.xuanzx.com/163tuxwgnwl.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163hoyxapcx.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163smmadfxi.html

JS:   arr.length
来源：http://www.aibaodan.cn/163vxroclrj.html

TS:   arr.length
来源：http://www.aibaodan.cn/163tpfjqkyi.html

Java: list.size();
来源：http://www.xuanzx.com/163rohafvjx.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163zfhkpsum.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163baiqjgem.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163rsvxeowb.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163agppvdgj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ugokgkpj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163whwlmylb.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163worafxls.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163yuhxsbcq.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163oqxtamsd.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163mdcohbit.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163dicqrduy.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163xjpwufxv.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163iugucuiv.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163sikbuxwq.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163pxipphev.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163kwgpcaem.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163dxbgrpqt.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163mrguueqg.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163kalkcteg.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163vuljocbp.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163vdluzqwd.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163luisizjo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163uvcigupa.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163iafpmiso.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163tjagfofk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163vozszdya.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163adwkfpag.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163zleoodwq.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ikknmrpl.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163tuzxftjk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163peuigwzh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163dnvrbjcs.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163aluecxsd.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qwyvoskr.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ohyjggjg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163urtdvuar.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163srqnuwah.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163uulatcox.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163wofajmey.html

[D11] 反转数组
来源：http://www.sxryk.cn/163abfqgugt.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163zpkjindd.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163powayrdj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163tfjtrsel.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163keojhwzf.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163nzdlbcxa.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163metutouf.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163fzqtqmba.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163wrkxhcdl.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163cfwujncx.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163gkglopzk.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163tdktmkpq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163zdlajzos.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ezojyjco.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163qktnwiov.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163gusgucch.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163hecrtwtk.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163yoqsyxlu.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163zprlzlzs.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163mbunhaal.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163brjtaozl.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ieedsgdi.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163wznvnqqd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163lshhaxuc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163lcgmwryw.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163icolcndt.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163chqjpywq.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163ounbwrjj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163wimgqvau.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163rnkzzrnw.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163mnqemmur.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163lnatxwid.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163kfvktvfn.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ralcdopo.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163lvemlnhi.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163wftdclmc.html

[D15] 去重
来源：http://www.sxryk.cn/163cawudwcb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163vkanhuaq.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163slhhvwgs.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163wdjhxfkw.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163vgigfkgh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163fhzynurz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163aicvmvor.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163gafmswap.html


<!-- 参考信息 -->