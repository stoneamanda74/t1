外链999!wailian999！

Go:   a && b || !c
来源：http://www.aibaodan.cn/163rinjeuoa.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163icekqkvl.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ioxgikcu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163hbvaycvj.html

Py:   if not data: return
来源：http://www.sxryk.cn/163lwkazfqy.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163spyhavnd.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163damamiqw.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163umbsnnyw.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163ngdldgfu.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163cgsmopuo.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163dnocarpu.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163whizyqti.html

================================================================================
来源：http://www.sxryk.cn/163cpyxnzqz.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163rdyiuvud.html

================================================================================
来源：http://www.xuanzx.com/163bhbkekqj.html

[C01] 定义函数
来源：http://www.sxryk.cn/163gzyngjei.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163vmsadkqt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163mlohzsih.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163jishtoas.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163dqfvjdxg.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mcydzoor.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163dmzqtxss.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163laiweucl.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qciuqfwt.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163chjczeai.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163hzoksckq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163pofrpqla.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163yioppstn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163zvqjchxi.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163viuaxlsr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163kphzopfb.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163twgwrlhi.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163glzhukmi.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163mhzvzzmu.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ktlafdkk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163rrpzinxk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qfouyktn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163kgvwwzfm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163bysadxja.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163gbwqrjhe.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163hzsmafhu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163dmzwwwis.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163vepekkgf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163hssvvnis.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163gokctthd.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163cubdmijv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163rgrspkrp.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163lmpopemw.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ykikfjxb.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163tnjtlwwc.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dohhroch.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163nsaavsot.html

Py:   return a, b
来源：http://www.xuanzx.com/163arerkpek.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163sabyxqbp.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163mpxtzyhn.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163tikasguk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163qijgmoib.html

Go:   return a, b
来源：http://www.aibaodan.cn/163qlwdenkk.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163atlmbfgj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163vmpjrlci.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163esfbicnk.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ehkwykaw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163mscckppx.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163pjyhisow.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163gxrtrwkw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163aumydnjv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163wtwxrljd.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163blfikblv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163vvissfjm.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ffygehsh.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163zovxibpn.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163wfsrrbov.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163mxgbqvxt.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163madjddic.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163jcqgcdtm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163crzwnvps.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163hdzmowck.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163xyylqbah.html

[C08] 闭包
来源：http://www.sxryk.cn/163vtnffjey.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163fqppxvct.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163didfvpsk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xkhqlkvy.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163yxwtbxcl.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ppkwpszb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163qsclgbrw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163agfbfcuv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hhlxlwab.html

[C09] 递归
来源：http://www.aibaodan.cn/163vrpgcyfl.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163gszigpla.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163xvitkful.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163xmmlorap.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163jaypfmcx.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163snwpssnr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163obhdqboo.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163jmdkymtm.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163yeqjflax.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163huyutcuq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163odpviifl.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163tyyhxwzt.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163mlzdxgtv.html

TS:   同 JS
来源：http://www.sxryk.cn/163czmdwbjp.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163reywzone.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163quxbyofl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163yxhvkmhy.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163vepbpyrz.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163sdzpxdyn.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ncltfacz.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163qwpvzhrt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163xxuivsan.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163dxtqvcnb.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163cexwnclw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163nlmaoayv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163ipmblpny.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163vrlajuky.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163lsqxgjeq.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163xwoedalp.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163vrfvsoju.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163kwigeqck.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163dezyjahp.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ddffqjtz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163jmgydteb.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ldmqmhdw.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163wjkayemh.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163vysmthjj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ndyguspw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ixqnwkoh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163gwwzqagd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163hizlkwox.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kfmejgxh.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163fcmpmsio.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163asddtavn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163nrmoyuea.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163wjypdluw.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163bhcjxmfl.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163tvafifkp.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163fkfvlrwj.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163wxqgwzid.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163wyuwxplw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163wkuwisgq.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ynjlogfh.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163izlthjmh.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163rtnlbxuo.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163tejdmzks.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163fqsdrcil.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163uuzzuqyn.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163lwfwmpey.html

Java: // 无解构
来源：http://www.aibaodan.cn/163dtjvaylk.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ixpndsti.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163qgchsozg.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ttpfsqna.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163zblvhikp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163prxkcjam.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163zqosevux.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163mdhdcqqy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163npdssfww.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163bhfqiort.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163ebdhsiwe.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163fcqayqsh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163cxppxjja.html

================================================================================
来源：http://www.aibaodan.cn/163fephvmxq.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163dvfagqod.html

================================================================================
来源：http://www.aibaodan.cn/163pmioiekz.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163floqipjx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163yhborvdc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163kwbqouff.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163vouymmka.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163kiqjygqj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163yaeviwdu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163wyrcjfdg.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163bogpspio.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163uhizireh.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163qdppmcet.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163jzwgeewx.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163hjrdagvb.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163gljfkyoe.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ecuqxhyf.html

Java: list.add(4);
来源：http://www.xuanzx.com/163zcnpkbgo.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163vbnnrito.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163syqygqhe.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163qvhkrtfh.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163dccxstrp.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ucgomrpv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163dktgfrjz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163jmxtkfcg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163oqfyrexo.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163xolgkhor.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163hldwjseo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163uptguzfq.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163lsnbhteq.html

[D04] 删除元素
来源：http://www.sxryk.cn/163koejojos.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163lhvxxbze.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163ugtsfndv.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163fkenjgxk.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163xpvtfkmb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163mkfzhswj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163mdknaqgk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163tmdskhwg.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163fcdyoigv.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163zpgzfhev.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qdcfvgtx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ckhchivc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163qmvhfoxz.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163ihrllwhe.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163vcidtjxf.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163kemwqzto.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163vpsqqees.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163yafbyiau.html

[D06] 数组长度
来源：http://www.xuanzx.com/163pxppxtxh.html

Py:   len(arr)
来源：http://www.xuanzx.com/163wydtodut.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163mmuhxqgj.html

JS:   arr.length
来源：http://www.sxryk.cn/163qexblnje.html

TS:   arr.length
来源：http://www.sxryk.cn/163urjulxac.html

Java: list.size();
来源：http://www.xuanzx.com/163fuinxxzj.html

Go:   len(arr)
来源：http://www.xuanzx.com/163ztdytjww.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163mexcsclk.html

C#:   list.Count;
来源：http://www.xuanzx.com/163ezvodboe.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ffapwiwb.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163qlesfpia.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ssuvytgm.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163zqiyvvkt.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163gripozti.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163ggfwbdra.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163dtstpctq.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163czzcxutc.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163snnatiow.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163nlvqxjgy.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163vyibowvo.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ngeuriej.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163zidwzllm.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163qgzrokgi.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ewukhviu.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163cbkyrlyh.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163gbiugygl.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163uoougomb.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163xbiebdkz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163czvsqeog.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163edlrzomw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ycdguqhj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ijlisrdf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163xktbwfwz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163jxbcbpzu.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163wmalxsbe.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163tkktamdf.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163abupqegz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ictlqint.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163gahohacp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163lbiqeddy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163asooqudd.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163picagwtm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163tvoyehbz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163dsyvnwiv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163otkfefnr.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163tfombupq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163nmpxdhuu.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163wssldzgc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163diwbpauh.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163pndouuvq.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163mrswuugm.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163nsyuemji.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ocmztynz.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163hwlptsga.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163nmbhbwrn.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163yxdowmrp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163mastzhnw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163dislohvi.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xbgttrrw.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163lpiulapb.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163wghsmcoj.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163zgoekgzv.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163cjwewulz.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163ohtofium.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163lauhnsus.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163qonizdfm.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163cvwetnwi.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163bnwgdvpw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163rrtbrrpl.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163gonqpdom.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163kfgclzmn.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163jsjethqx.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163ywwaneor.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163rbeqhemv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ptnevyon.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163uqwgbsmp.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163naailmzt.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163yjvoxqzm.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163pbqzuhsl.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163wliyzuaj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163qkjrrevr.html

[D15] 去重
来源：http://www.sxryk.cn/163jmipikhd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163dvvabsak.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163agypwhob.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163qekcwcxz.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163uleifhra.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163mtqwdxxy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163kvrsuvox.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163oyitsuzf.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163rctavsnm.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163bshdaclx.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163lgtcsqjz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163xqltfndo.html


<!-- 参考信息 -->