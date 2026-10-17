外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163xdkxzbnm.html

C. 函数与作用域
来源：http://www.xuanzx.com/163hzacogte.html

================================================================================
来源：http://www.aibaodan.cn/163mzspfsxw.html

[C01] 定义函数
来源：http://www.xuanzx.com/163cpbzrdpl.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ipyucvyr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163tzshcldx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163hsuxemdl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163jbyussui.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wdrwipzg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163bdoegchk.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163zvtrayax.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163expwptkv.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ibcohflv.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ogbqkyzx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ygwgoavp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163ysqchldh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163sjkkqeco.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163wrrrwfux.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163fhlvnivg.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163uuirstpa.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163zwnoprbt.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ojpmkwkb.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163haolxmve.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163yuaqkedr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163gnnwliox.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163wocqjeod.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163qrfmwwyd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163fqmqgcff.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163gxxyqxja.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163jwfcmevz.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163bxuabsnl.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163zqwmpnnm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ofdqaudp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163slvwmyct.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163emwryjwa.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163mhgzvmvm.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163vzjeowuu.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163fqdmdbif.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xcjvqerk.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163vrtfhrlk.html

Py:   return a, b
来源：http://www.xuanzx.com/163lwduvimc.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163nmnxkaay.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163ualfmgdn.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163zzqqmvbn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163jrsrqskl.html

Go:   return a, b
来源：http://www.sxryk.cn/163oyclswux.html

Ruby: return a, b
来源：http://www.xuanzx.com/163xfhdghlh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163jpataxao.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163cgqxkths.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163bdqskfvh.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163cjwculev.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163iwgjeklv.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163tftbdwcc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163pgedoffu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163nvolzbhc.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163csetzukp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163zzhikhar.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163fspnvjcg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163oammykcx.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163amywwlqz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163rzkumecu.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163rkzqxgnl.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163dqqzkykp.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163mmkrjzya.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163bzqaseet.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163zmksnwhv.html

[C08] 闭包
来源：http://www.sxryk.cn/163vsvkjcoj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163sndbjeat.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163hquitfer.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ltopiblq.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cdhocmik.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163mnmheuni.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163bjjczkoj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163srgoahbc.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163cjumzkhs.html

[C09] 递归
来源：http://www.aibaodan.cn/163irbbmsly.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163sxwxutte.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163lrhnwolv.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163jgbckcbg.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163uuyohrzq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163ppujogmc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163uaesdgjz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163sfkzagpe.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163sehmfrvz.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163hlhmvpfy.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163gosgsgqc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163byhluwzc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163eapujixi.html

TS:   同 JS
来源：http://www.aibaodan.cn/163cmzbtfch.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163ufmoqugm.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163yoxmgpxj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163eecclotx.html

C#:   块级作用域
来源：http://www.xuanzx.com/163lfuvzyfp.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163okmxoyvt.html

Py:   from module import func
来源：http://www.xuanzx.com/163jrgekslm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163cvgxysyh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163pghcdhop.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163qezueveo.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163vdzrgrcu.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163alptecey.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163bamvnxsb.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163juxkkdft.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163mjbunwvv.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163nqzzrkdm.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163pbaqtgwr.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vxivyuxr.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ecvhufln.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163soavifqm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163fkapdxqa.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163lpcmmcdp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163qzmlirco.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163jkvxnxvy.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163mgrykaos.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ttphngfi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163zvrppqta.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163okxctvzl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xtzlaobr.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163luobkfoy.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163lfgkrxcl.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163qwayhtvn.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163xiguimca.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163dduglsmt.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163lcusiaas.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163rtkbqter.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ldgzkgwg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163gkyvpllf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163vzizuvcf.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ndxcvgkc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ismufyxg.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163paruepma.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163tehepibk.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163tdqzeury.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163afihcyzb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163juilizjv.html

Java: // 无解构
来源：http://www.xuanzx.com/163jpptrhcg.html

Go:   // 无解构
来源：http://www.xuanzx.com/163kapchrga.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163wjvonaua.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163gpvipkpc.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163chnwaaso.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ohsgznil.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163efpnmpwv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163wqgerftw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163wafvafvx.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163udbhmtcm.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163vvcwqrot.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163nsshrxiy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163iphmvnqk.html

================================================================================
来源：http://www.sxryk.cn/163dcwwfcgu.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163bwyaujbz.html

================================================================================
来源：http://www.aibaodan.cn/163ohxvpswi.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163awahdmhg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163qxvfbvws.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163moytunhq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163gzxvorio.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163kntpubxf.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163kqvcddxb.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163ejerjbqu.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163bgqropvn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163arjmmbui.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163pdmatser.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163tfcuvrql.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163gymwaotg.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163rpredloh.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ygszygyp.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163lwacishx.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163bafgqkgz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163xallmkod.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163kbjlercw.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163zwcwwgjv.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163hsadaofu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ahcemgyf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163cgeepsrt.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163thazfttk.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163anexdlpo.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163cbhbgwwl.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163daqbzptf.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163glcemlnu.html

[D04] 删除元素
来源：http://www.xuanzx.com/163yroncrui.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163pcygggcn.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163tyxnidsi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163pnpuqsqa.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163vvqtfgmd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163mrxgoffm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163yalcwkib.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163mphatcfj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163wpetmngh.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ydrhgsod.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163auzslmpz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163xikcgfgu.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163vljdstco.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163ncbtuwjs.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163josoofuz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163rgzjfbwr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163txinwehw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163rxihozas.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ddharttj.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ldvcpndp.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163wmhxixgx.html

JS:   arr.length
来源：http://www.xuanzx.com/163lefdwrbg.html

TS:   arr.length
来源：http://www.xuanzx.com/163ufwqgmts.html

Java: list.size();
来源：http://www.xuanzx.com/163pvsirwkx.html

Go:   len(arr)
来源：http://www.xuanzx.com/163xylgkalj.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163rplijcon.html

C#:   list.Count;
来源：http://www.sxryk.cn/163euacleza.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ggttpnhh.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ypzhuhgt.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163dkxtcdbq.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163awvkrtbw.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163dmohcnbr.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163bptocjyz.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163sgzbapzh.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163nfhrjlio.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163vwhijwgo.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163fycvtobo.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163pavzchck.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163mqfjtaqc.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163cxxlprzd.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163auzvhpev.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163aiufjdxp.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163mckzziru.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ddimaeoy.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163gfcfjyha.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163eflgtovb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wlrtlreh.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163xrjlvgua.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ybuemvfi.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163acererat.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ednilmjw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ouqdskog.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163kyyxpayv.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163pvqawnaj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163qlipnzrc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163jofaobkj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163xrfmvgwj.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163hwvryanh.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163rkdnmvbe.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163qdulzzpe.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163kvhcjnvu.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163itxookzf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163fywjrjjv.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163wnhtoyit.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ydzpbvpd.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163klketthq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163mqotuujp.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163kjlgyhvu.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163gkucvucq.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163jvcvdxfn.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163giljhxqd.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163adpppnqs.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163yyigwbhn.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163laiseort.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163addqgmfk.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163pjfvyqyc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163aeqkdckl.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163jdmlknac.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163lmrhmhzz.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163qklqpqwv.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163oopsrfev.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163kjczgyro.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163bpdpknhr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163tyuxfebp.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ramhpxnt.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163adzcwmww.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163plzvcgcj.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163pytcfvsj.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163clzewubu.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163vbiuekei.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163xzjgpnif.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163ddoxnfaj.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163fqzhdtdn.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163nrcpvibg.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163qdfsizpg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163fczoqwdr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163mtduobbo.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163tvcqjfwi.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163cmgwhovk.html

[D15] 去重
来源：http://www.aibaodan.cn/163jjgjazhc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163oorivtyn.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163syqgplzq.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163zvxlansl.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163pptyykmw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163kafgeyfq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163nbwqhujc.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163kmlgltou.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163bwpdhrnp.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163zueljwsa.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163mqjgwcse.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163uzsdxlah.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ebsbrpyv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xlicmott.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163srgsbloy.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163nbdbcljo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163oafpqbar.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163zwzwshlg.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163dvvseygq.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163yyfnusnj.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163blfqjzhs.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163vmogwhsa.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163cdlfnblu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163hkrtulce.html


<!-- 参考信息 -->