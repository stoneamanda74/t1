外链999!wailian999！

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163grryimqy.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163rcishvmx.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163mpyphnwr.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163faamgzaf.html

================================================================================
来源：http://www.aibaodan.cn/163xafrfkoh.html

C. 函数与作用域
来源：http://www.sxryk.cn/163zrykvewu.html

================================================================================
来源：http://www.xuanzx.com/163gwiwuddl.html

[C01] 定义函数
来源：http://www.sxryk.cn/163iksprlkp.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163mpgjnhji.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rmqbukyv.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163fgqhjrfo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163bwrpooun.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nrlxnehi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163sqxfnuru.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163elmcymyb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163pgltpqvv.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163zgswbila.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163mnvbisrm.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163npdaugnn.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163mhpnmmvj.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163gmuqlvge.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163sklnwwpj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163tijzvzmb.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163orsarqyg.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163kywydpoo.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163qkjlxcpl.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163kkrqkloq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163jwuyjyvn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163uhzumrup.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163eapqopod.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163lctshwwe.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163lhazbbdh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163rcytkaet.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163nwvzlsde.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163qlbfwhsm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163ardfzkid.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163hcvwvtgv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163fnqogvsp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163oqwsamaf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163bxvovwxi.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163axfquuze.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163olgaifwt.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163yscsmhnp.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163wpwernpw.html

Py:   return a, b
来源：http://www.aibaodan.cn/163lxyolste.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163qxtpmnmw.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ocyfyasr.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163mxtvujxn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163ryrlhlbq.html

Go:   return a, b
来源：http://www.xuanzx.com/163zyzsndua.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ukwxubia.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163knjxupgt.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163jzhliipt.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163haauehpj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163sjvrdixq.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163zdixjdlm.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163frcrdmtz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163cyofizfx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163fdnlvhtb.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163tskgpjaq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ugwueuqh.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163woeaduke.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163myfauwnm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ruqjkmre.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163rpoddvxi.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163mokboswu.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163xsirlqpg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163uwjtuabf.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163bubieimx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163nvgpwlft.html

[C08] 闭包
来源：http://www.xuanzx.com/163pczadhkt.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163grfhjbeh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ryzibnns.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zopnxdxz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163pwchdwwn.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163ptfivvsn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163oyfwrqkt.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163jaukssug.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163nimvtgmt.html

[C09] 递归
来源：http://www.sxryk.cn/163mmmkjvmj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163yexkuhlq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163tfohzhkw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163srnacdhq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ybmtzfvh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163xtotsecd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163qqpdvtnw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163vblfxqqv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163zpfmlskv.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163yiwmogod.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163djbpnobv.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163hbstrccz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163jepdjccq.html

TS:   同 JS
来源：http://www.aibaodan.cn/163zrrtddpm.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163uyngzjzh.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163jdgmxmbw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163jpszojdd.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ivocrigr.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163jorszugw.html

Py:   from module import func
来源：http://www.xuanzx.com/163etfykuaw.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163zvkymhrp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163kengljge.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163crycskxl.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163vdjfyiel.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163fcglmroj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163mverzcrb.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163lblqqbwn.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163ayyysqlp.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ojoipraj.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163fdafugqa.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163pxuwizze.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163lcrgyqhj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163pspjgrra.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163oihpqscj.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163wpaluwfr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163lfkrlyeg.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163ywokghhh.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163ocbsqytn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163hihbzynk.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163lmtehvvf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163msvvypub.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163sdazjebg.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ncohtjjm.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163zqgcyuzg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ufiwjkcl.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163geoobnkz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163hhkbysnp.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ddljhzzh.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163prcwopek.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163scwuqfls.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163biurekve.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163npwxznfp.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ccoqzzqs.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163stdqppxp.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163sfvlmvgp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163qhtultrl.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163yfejgjua.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163payhtuth.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163zmuwrgji.html

Java: // 无解构
来源：http://www.sxryk.cn/163rigoswlr.html

Go:   // 无解构
来源：http://www.xuanzx.com/163qfqhiqqx.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163cdtyodgv.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163eodllnqq.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163dstjsgzw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163nsukqmfl.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ymdvmjxa.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163wckmajsg.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163lmzkancm.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163rijnfybr.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163kovrkvih.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163dsenzezf.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163rltxhsyb.html

================================================================================
来源：http://www.sxryk.cn/163gwobxbit.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ehzqugcm.html

================================================================================
来源：http://www.sxryk.cn/163ssclagup.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163zbjflsrh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163yvtalqka.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163fxxkpxsq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163tklxsvkj.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163mltvfqmi.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163xhlqwetk.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163mcorbfgc.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ziuwkxfl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163nhcrexqd.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163rcswnete.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163mxfrkubt.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163hfsbtiwh.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163pchvgdgn.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163gzaeefzy.html

Java: list.add(4);
来源：http://www.sxryk.cn/163glencbyb.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163wsxzodjn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163sdipbvgw.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ijxeahzp.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163zechynpt.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163khdyhcvj.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163wnsekbzd.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163icqfvwdr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163cfvxtvva.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163jdxqfbyn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163cyujsanz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163znscqrwo.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163awayhtdl.html

[D04] 删除元素
来源：http://www.xuanzx.com/163hjbojkbw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163yaxwkqhr.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163wyutwyfl.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163bdpzqtqc.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163jfoldlcg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163wkaohlaa.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163sdgptbrg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163crizzayq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163jacboecv.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163fbcxijwe.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163qoqatnum.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163iconupsp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163kgxusfjn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163jcycikfo.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163tankotkk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163cayqsrgw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163kvtanqfq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163ddnyiued.html

[D06] 数组长度
来源：http://www.sxryk.cn/163yzeqclcr.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163lewngkkq.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163wrrzjrht.html

JS:   arr.length
来源：http://www.sxryk.cn/163txdswqkr.html

TS:   arr.length
来源：http://www.sxryk.cn/163bwjqalql.html

Java: list.size();
来源：http://www.sxryk.cn/163ksxknisn.html

Go:   len(arr)
来源：http://www.xuanzx.com/163etzzteap.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163vjfhyfxq.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163djlbffwz.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ldgxxbvy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163vjdheowk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163jwkuehkv.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163dnpnateh.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163efxclvew.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163zyokwuma.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163vsgpnrel.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163ibbgdlfq.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163rsdafvdw.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163gjeuhscr.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163cskqdqlv.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163vpukjkfn.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163gulqdsqz.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163rowecpid.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163gyxgbwyc.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163ickyzsom.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163wuadeqos.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163maxpzsqw.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163vulmktnv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163kiwxtiff.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163tjianixv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163zqxhcoqk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163hlbtlnzh.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163gmmvdqlh.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163xbxvwzpk.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163emcwrrpb.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163dozpbmcq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163gwckvgau.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163dxaycsjg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163daqrevtu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163skfmmraj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163enmazvkg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163gftxokhi.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163wcwtecnw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163gfqmtphv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163jwzqvkay.html

[D11] 反转数组
来源：http://www.sxryk.cn/163erjryhwi.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163qnxkmrlh.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163scaobxcf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ajbyqjge.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163bumcgapd.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163bgplhwpt.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163hhfqyvik.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163zgiioacs.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ycickckn.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163vfqlmnrd.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163sqhsphqp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163nilyuvry.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163xwyaslra.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163fdnbbvow.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163pnrnpxgp.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163kfgjsdug.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163aertjqzm.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163jxfrwcff.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163amooqunc.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163rbgkiuip.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163hqiqndrp.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163bicfvwlf.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ukdhqbgw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163fhcpvtkj.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163edkujzzg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163iaxxbhsb.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163ogbvyitp.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163zfvjuxgq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163kkzqmgay.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163hdlzhhdd.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163spexltmz.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163pglafigm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163lfdmyavb.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163wiimtfof.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163zsrtioef.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163xaimsaqf.html

[D15] 去重
来源：http://www.aibaodan.cn/163tvwvhirj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163xsuqyutw.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163dnikrmro.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163liaxzaau.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163fnbimeiu.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163rpyhxokh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163wlqdofpb.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163cpisrbtg.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ffhnycna.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163eubfgdvt.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163nqoafbtf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163dahpzsjt.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vmdqiccs.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163soghcfdf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163uwjrrauo.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163mrudhzol.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163xmfhjxqc.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163relnjhbs.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163nnydaaxz.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163elszsiqm.html


<!-- 参考信息 -->