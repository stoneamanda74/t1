外链999!wailian999！

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163petirmco.html

Go:   return a, b
来源：http://www.sxryk.cn/163bbztxwvx.html

Ruby: return a, b
来源：http://www.sxryk.cn/163gipthulk.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163avsflnfc.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163hwmpzpmb.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163sxqdvbsz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ttcdzaur.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163bkpynwcm.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ingppvke.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ghzkbrut.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163zilztcwc.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ndakixhg.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163muigximw.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163icwslxqr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163rwdgqout.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163vsmcbber.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163pxqcjnoo.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163lvbtsybw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163oswtkgwx.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163kjqotybn.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163diongmhd.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163xxfpxxts.html

[C08] 闭包
来源：http://www.xuanzx.com/163ivfputut.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163uvibxzev.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163kuipdqdv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zsdpfuzz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bfofcsux.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163xrbkcwcz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163kxtwsvyf.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163fylyvtgf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163qgcvzztp.html

[C09] 递归
来源：http://www.sxryk.cn/163hftboxzx.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163pwufolzm.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163rnpmvsgz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ktrxpdnm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163cwmsgaju.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163lnssolom.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163hpiueyjd.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163zpnibblx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163hurzypvv.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ijxbwfzt.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163uaupkvro.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163oghllute.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163bjxjzotk.html

TS:   同 JS
来源：http://www.sxryk.cn/163vikdgcby.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163jxnhmmtp.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163kolfkcmx.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163dsukhzhp.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163tokobmxn.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163elywadhm.html

Py:   from module import func
来源：http://www.sxryk.cn/163fkkzqqxk.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163qdsspsvx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ezlryoir.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163vdrzbxfi.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ppshlcks.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163zltknnvi.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163uwzqkabc.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163mhphdqgs.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163naegnrvi.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ztubdraf.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ckcgdgwn.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163hvcjvolt.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163jnprevkz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163lqmmsnxy.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163vkoqxjxa.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163jdwazxxv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163qtjsfmsz.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163fwrycqjx.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163xwqbnsln.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fugrhlth.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163pqpjwbrz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163jrgmximj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163veaudsnd.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163cbhvcbew.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163fhgudgnp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163kccnzxpe.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163ymmqcegg.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163fkqmferp.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163rhoicxyo.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163ifmzejao.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ptxvgyla.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ithvjcgw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163tyveoayd.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163apgeodvb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163dkikxgmj.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163dllvoljn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163rgdhgbpz.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163hsuuotcn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163nglmejqc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ulkfftys.html

Java: // 无解构
来源：http://www.xuanzx.com/163ptxkuhzj.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ehsywzxw.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163cabjtnlh.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163jmmvmqcs.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163mexdwici.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163rslhykbq.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163lbxgoczd.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ptqblvjy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163omvlcxah.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163yticfkzp.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163tyaejpme.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163zckkqdan.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163vewkurtx.html

================================================================================
来源：http://www.sxryk.cn/163lmegmksl.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163hsxzvhkb.html

================================================================================
来源：http://www.xuanzx.com/163qzsdzsgp.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163fylmhytd.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163esidhvdp.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163gbnwjmjn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163zvwdybuk.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163fiiytpjh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163aqpoocrr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163doroecgp.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163viwlrqax.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163scrnmlyx.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163aujjuzvv.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163lragjdhj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163nfrldfdh.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163bikgjcgk.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ktvkpyje.html

Java: list.add(4);
来源：http://www.sxryk.cn/163ugusmsxf.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163wmlyomtr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163iezfclke.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163vgoevceq.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163vwezzfoc.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ghedyvsp.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163qnwykrfw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163uornhtlz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163zngsxuea.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163nfucxjvr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163lbnzhmqz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163prcesybm.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163busiqxnz.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163kxnxlcrr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163colznxfg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163cgqhqdpf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163klbwsmax.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163zzuhemis.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163xkkyjdwd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163dxrxtspb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163auejydix.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163cunvatsj.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163itubjptq.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163oogdsnag.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163krilriae.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163eozslrci.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163xhibyhhy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163jdbkeczc.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163fvzaqcja.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163sfcmdrwr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163rtrofmox.html

[D06] 数组长度
来源：http://www.sxryk.cn/163veyfzphp.html

Py:   len(arr)
来源：http://www.xuanzx.com/163mdgowpox.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163qcxijimy.html

JS:   arr.length
来源：http://www.xuanzx.com/163pxomvkpu.html

TS:   arr.length
来源：http://www.sxryk.cn/163fhjujczo.html

Java: list.size();
来源：http://www.xuanzx.com/163huncpifc.html

Go:   len(arr)
来源：http://www.xuanzx.com/163udcvqaer.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163pxbktfwe.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163rghywfpb.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163cmwfwafn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163mqqisrsi.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163mlotpwmr.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163flimjbox.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163idulrxrd.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163reusnuol.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163zefdwnye.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163qzmjqwul.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163htwxgrdc.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163iwvchknl.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163vhwlwboq.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163prdmlhoj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163kpwaidjf.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163rvdcflgk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ijfidmpl.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163iuknoxlx.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163uovaywft.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163hqnhyrch.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163tcuaanbv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163hjeuieuh.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163vtdoxorg.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163sygkdjhd.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ijafuose.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ollqsofc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163jjcfvabn.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163zsvwujgx.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ckurvuca.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163nozcazqp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163hyphgbmb.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163hdrpezpv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163fqcqpdkx.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163kojjnabe.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163mrgtflnt.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ahvlxzps.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163lmumpndt.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163nyfquyyz.html

[D11] 反转数组
来源：http://www.xuanzx.com/163pexlevgp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163puffybsg.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163bmppwxcl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163etkwnjfi.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163unukdwox.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163gspyccgl.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163bnilatcr.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ttpunceo.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163drrtkaza.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163kloakaxb.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163pjcahgid.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163rrllxrle.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ozfnkuwy.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163irybuqvi.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163erhpapry.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163ipdtaaac.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163acwcvzdl.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163omvwmjcb.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163prbzahnb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163vnubxgxr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163lowwosfh.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jcomgrrh.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163zdtybatc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ndrsnztj.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163fwrkzhcm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163sqvfkyaq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163zqwcwnkc.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163evyypwck.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163ahljbokh.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163nbshdbfm.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163hcoejzhn.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163zwnytydh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163nbxzhlnt.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163evoyilsy.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163amzpcdgo.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163rflokuza.html

[D15] 去重
来源：http://www.aibaodan.cn/163dcmlzydm.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qprnvdnq.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163cpoyhoyf.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ozolqqgs.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163hbcdkldw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163yhdmvyed.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163xdmyjgpt.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163bxgntgah.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163dulbzliw.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163glfymuqk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163thapxbyv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163qmwfydzk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163nfgefibh.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163vjfgqexk.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163fkjqyhbt.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163aceetgph.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163paeubqqq.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ikhkfews.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163mvbcersx.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163emmabyug.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163hbqxxrwn.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163lhlwmlmn.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163lurqmauo.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163gtpzyqhf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163odhixcyq.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163vjsbtfeq.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163tyownzrh.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163qalvfsyc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163zcrxhjje.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163ufjfhphd.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163kbguuiqt.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163dxlilucf.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163lcbpxhvc.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163lhihzjlm.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163tftseiyw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163dfvppphj.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163nknkfvad.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163fkeyuhpq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163mdkbvxzd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163owhtidbs.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163czbzmtbb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163irqzygxk.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163yowswagv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163dgyzwdip.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ykwoidpq.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163edkqwlct.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163hwdewgmb.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163dfxvmvis.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163uhhsucsd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163htehkctm.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163quirqped.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ozldqeqg.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163xhxpfqan.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163wbwdjowz.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163rlnvftfn.html

Py:   x in arr
来源：http://www.xuanzx.com/163nzsgualn.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163orlqfjld.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163abqeipfd.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163uceimvnk.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163wjjkkpny.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163jxvbkwiz.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163lihzwmhc.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163omhwbbmy.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163fyvdvtxz.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163vyqeslrh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163uztbfiye.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163jtzkykgo.html

TS:   [...arr];
来源：http://www.xuanzx.com/163ortggqzh.html


<!-- 参考信息 -->