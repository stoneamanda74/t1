外链999!wailian999！

Py:   return a, b
来源：http://www.sxryk.cn/163saflxdwh.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163flqgxsxb.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163teupwyzg.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163kpmtetol.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163qimljvsi.html

Go:   return a, b
来源：http://www.xuanzx.com/163hzgtjhjc.html

Ruby: return a, b
来源：http://www.xuanzx.com/163rnflziaz.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ezxxkzmb.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163zcsgxuuq.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163tyiepssa.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163uahefalq.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163jbekyddw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163jplfstnr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163jmzscrel.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163raajjagq.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163aianwrtj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163livhjzsx.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163gjhxycqo.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163adqipqnr.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163dwiqkfmo.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163gdgfayzg.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163cdqavcde.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163exnsdzmw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163asnxbfnh.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163sgjbvvtu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163xjkthwcu.html

[C08] 闭包
来源：http://www.sxryk.cn/163ljvqedzr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163xqcyuzxw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163bashhqdg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xmnkpxft.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163sxhdgydj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163ldaljmlx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163yjtdqstb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163xhceyiba.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wtcsyojs.html

[C09] 递归
来源：http://www.xuanzx.com/163nhlhnvrm.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163tqsgudrx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163yivyrpbs.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163iytszrvx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163henrcagj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163hozqgkov.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163jtpofhfl.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163wgrmyklf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163btmqmyhj.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163uafporvw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163wcfzlrut.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163hberyszj.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163zemwlgpi.html

TS:   同 JS
来源：http://www.xuanzx.com/163rzkpweir.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163qnowimaj.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163fjbeqwgd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163olwbgild.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163lnyveisb.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163cdxbjvjj.html

Py:   from module import func
来源：http://www.sxryk.cn/163rskbffwn.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163drmpissd.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163bmeadxgk.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163frumemve.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163vixdvmaj.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163wkrbbnga.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163ldalcehw.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163uauzaxoi.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163asssozxh.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163jwpweuvu.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ziclqbrt.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163scnleqrw.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163dlyakttk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163xxkqkzia.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163mkuohxzl.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163dgcwvfqu.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163mdxxxfxv.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163plhbregw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163zmqxlndb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163kzbxrdxn.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163eaeizxfp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163qocxyazy.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ziublhba.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163crqhopit.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163nugwwpfu.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163nwyymnzp.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ihldpzwu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163pknfjvtl.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163datspkrr.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163iadfqlqn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163nhlrykyc.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163exasdhak.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163jnzqkdzf.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163rrowhvah.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163btefgtax.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163dcfclvkt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163qamijriz.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163rdaoczdz.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ylwsygti.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163dgsrxyem.html

Java: // 无解构
来源：http://www.sxryk.cn/163kcxwnfvh.html

Go:   // 无解构
来源：http://www.xuanzx.com/163gilsrxyr.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163fdtzizbl.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163kumcptsi.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163mfnryjea.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163mthuqngy.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163gygewnpo.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163mulvzfck.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163yymzspgf.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163oqufhmsh.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163jxvvvksq.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163yfslkbdt.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163cavysixq.html

================================================================================
来源：http://www.aibaodan.cn/163hspzkjna.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163dcoqgsaq.html

================================================================================
来源：http://www.xuanzx.com/163oobssazi.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163owugkeax.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163jomrmlbg.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163vpwyytzy.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163wsczaujg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163fzfncccj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163fwbncegn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163kjtoywco.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163dkcpyelu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163vrrlcpfy.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163eyckhhxo.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ordqbdqw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163kbdotjtd.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163illejdzx.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163yaekxicm.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163kqkinwct.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163hucjcnmm.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163enskieuc.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163gxvuowps.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163xumtmxqo.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163saehrzvd.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163intzniem.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163enqtspnc.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163rupszglk.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163iyunuxum.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163fczgclvp.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163zuwwtpyw.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163yeuvuikf.html

[D04] 删除元素
来源：http://www.xuanzx.com/163dmiwebzk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163akaoprax.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163xwcobhds.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163khvcgata.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163asyplvqg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163tguccxap.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163jctpwvpv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163danyedbw.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163batqicjb.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ivsucerp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163yrahfsqd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163wgvosrvg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163byzrdyyc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163xelmikft.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163gzzduyzl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ynigmyyu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fbiljxzy.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163zpysrrek.html

[D06] 数组长度
来源：http://www.sxryk.cn/163vtmrksyy.html

Py:   len(arr)
来源：http://www.xuanzx.com/163igeuxlqd.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163eyoawbha.html

JS:   arr.length
来源：http://www.aibaodan.cn/163tupydjrx.html

TS:   arr.length
来源：http://www.xuanzx.com/163fctxxdxz.html

Java: list.size();
来源：http://www.sxryk.cn/163uwwmxnkz.html

Go:   len(arr)
来源：http://www.sxryk.cn/163tqpzyvjl.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ilhgtwqt.html

C#:   list.Count;
来源：http://www.sxryk.cn/163qwfpijgx.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163wpsvpsre.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163hyujzzfi.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163vzelljbz.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163iyfvwxjd.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163dsbgmuao.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163qzisnfvg.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163xphnsgkt.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163yjgevbxk.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163benexjom.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163xvjhvqpl.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163cftpzyvy.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ymgwaxyn.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163vaarcpdu.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163amolwllg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163iaeljflp.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163zwxrfgnq.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163txdyqlaz.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163vyjevstn.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163imuijigf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163mktvcmkz.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163secuvsbs.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163osslihyc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163decfaosw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163ztrjclvk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163mmgtexum.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163dklszxzs.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163ndqwnwkg.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ylwmszdv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163qmzzvnmd.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163bfbnoxfj.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163mvseyire.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163wxjqnihw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163ldvrelcb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ppzljrlm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163ahxkisdn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163nkqakpds.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ddzrypmd.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163oiflrvqj.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163vhaoiase.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163fqnkbjdn.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163optuydwg.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163qsikpoqe.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163fwfqjwhn.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163gkgdputy.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163gijncprr.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ioltfrku.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163pyijbfey.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163nlwphevo.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163lsszfkmh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163mtckzzro.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163nudwckoc.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163sactvcbu.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163qcpoufaa.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163erlkitod.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ivbsmspj.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163rokalsvh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163xbpyfyvu.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163frrgibxd.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163vnqfciag.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163uapzcdjw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163mktitzmy.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163porllujs.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163lodjwcrc.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163xiadtgjg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163qkgzzpmy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163dhgpsihb.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163bgjgqqno.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163blizetlm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163crdwcxgu.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163siyvngmz.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163gjpacwmi.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163jxxwoxsp.html

[D15] 去重
来源：http://www.aibaodan.cn/163ebbanexx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163hxbkzfqh.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163omlzqnyp.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163wluwqbgo.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163qebifdmv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163ljegpwmh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163fgktyozm.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163jyjcypfc.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163jpnoprfx.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163eaeukmwr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163xrfbtgws.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163lkttfjpr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163sfsiulbe.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163elreaeoi.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163dvyyryky.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163ebbfmfon.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163yzmmxmne.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163qdwadjvh.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163vomqarzw.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163uqoytwbq.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163zjzdgidi.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163tsozupoo.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163vdlqwfyu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163aruudzad.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163bgrqmmih.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ctvsmlck.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163emwexrwe.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163fdsnlroq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163zplnhypx.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163rlnbnrqo.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163gsupokpy.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163nkdwocwk.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163icqmlmnr.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163epjqwgjr.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163cxsctumn.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163eurtkufn.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163jmxpmmgf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ldwevagu.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163nzlhfkin.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163nxrgzyma.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163eaihlnau.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163rxuuxdme.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163sictxxvx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163wlzpmrtp.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163isjcsltf.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163tyhznxad.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163edfcxcyk.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163rlteznil.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163hznlylwv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163gdblmtvu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163xkzofvih.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163trysnfqw.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163squpjstv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163lcdbfaqe.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163zzsftpnk.html

Py:   x in arr
来源：http://www.xuanzx.com/163htntapxp.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163jyclwdcd.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163afdkqwbu.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ikdjfnmc.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163oyfiwoxd.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163zcumjxrk.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163fnxxadmd.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163kmtskbxx.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163abifjics.html


<!-- 参考信息 -->