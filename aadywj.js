外链999!wailian999！

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163fobaqauj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163ouylpida.html

[C08] 闭包
来源：http://www.aibaodan.cn/163wjloohkz.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163srszxbze.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163utxyfqgw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gpoxojng.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kmwswhbf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163sxelsqfs.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ujpikcyb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ffwhfrks.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qicumbio.html

[C09] 递归
来源：http://www.aibaodan.cn/163dcedyekt.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163upsecsvn.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163cbyjhlao.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163bxflldxc.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163knefogky.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163giedmqed.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163nfjrxrvn.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163rmjqnlwn.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163vwapemfd.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ijklmith.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163qweapmxn.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163jtozachs.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ylyfqttx.html

TS:   同 JS
来源：http://www.xuanzx.com/163nsoydizr.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163btalctrj.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163bcljahqi.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163ncxiujuh.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163mqraanks.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163nszwkoje.html

Py:   from module import func
来源：http://www.aibaodan.cn/163bdeqjtsk.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ohfyqdpw.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163hktjijhm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163otpikofa.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163nsvplnpr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163qlmilldk.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163imoocdnd.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163hkqspmkt.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163piggzfmq.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163modyqxkt.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ivsxfbaq.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163trnjwydc.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163cqhmdmzv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163uiidgalc.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163aizeuyyl.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ccacijzk.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163cbqouzab.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163vxqbipob.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163mcdggmzt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ztvsnntx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163vxkxxkzz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163jozpihdw.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qqsnjwdz.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163nwxzypov.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163bmbcgfzl.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163kilkjcgy.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163zjdxhudz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ecxczfju.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163fczmgpzc.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163hkzhtdwa.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163yysufzdn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163hatzgbpo.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163qztqecdj.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163jjeobwlx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163pnwibmfm.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163qhatupry.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ghhflrta.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163wxazzpap.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163haydjaii.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163mupysqmv.html

Java: // 无解构
来源：http://www.xuanzx.com/163rnsbtbzt.html

Go:   // 无解构
来源：http://www.xuanzx.com/163kfpilwif.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163osijfyoo.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163opiuelhc.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163vnotbuut.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ldhjabzg.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163mqrassoa.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163xxvvymqo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163munxfbec.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163rngfqgxb.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163uckeyjhb.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163zwnlokax.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163pggwgyiw.html

================================================================================
来源：http://www.sxryk.cn/163nmdsqmnj.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163sgdzubcp.html

================================================================================
来源：http://www.xuanzx.com/163aheisxww.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163ntawzbow.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163mzubmfcf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163fykdaxun.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163gxitcuwe.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163zivspnui.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163fcbiezvw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ijzyvlgt.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163iwhiupft.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163yqxsezhg.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ibdyiurx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163hecwmbvb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163kyukrnik.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163pxakeqju.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163dmfbwldt.html

Java: list.add(4);
来源：http://www.xuanzx.com/163fxaenhnd.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ongnvumz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163gsbteqxp.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163rwbwptvj.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163hgmwjvpx.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163dkeaectj.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163fjjsisst.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163sjnoqlcy.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163koywxcyn.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163vafjetzg.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163myhzoeux.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ioxcdqeq.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163otctjnip.html

[D04] 删除元素
来源：http://www.xuanzx.com/163svloxztt.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ulxzzwye.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163qnveazer.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163vpvlapnt.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163qrzljrhc.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163xslhcoco.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163etziatuk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ickbodva.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163pixcsulb.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163izkenhdj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163nknclxlg.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163qkwtnjwh.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163pfvmfwxc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163qodbesyt.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163jlvrdcjc.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163icsicdbm.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163tnufbnyx.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163wlewsyqa.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ncjzambc.html

Py:   len(arr)
来源：http://www.sxryk.cn/163tbpxtnsf.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163lnfwuebe.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ielqybod.html

TS:   arr.length
来源：http://www.aibaodan.cn/163xwtwrtnq.html

Java: list.size();
来源：http://www.aibaodan.cn/163ihghhnal.html

Go:   len(arr)
来源：http://www.sxryk.cn/163smpsxevo.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163mfrfmhqb.html

C#:   list.Count;
来源：http://www.xuanzx.com/163mtuiblov.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163npglgnts.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163cnmfmwsa.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163wgwygsxf.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163urerknmx.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163iuvtnlnx.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163bmmtozyr.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163abhezjpk.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163drdaefma.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163csvbqxxs.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163plduyqjz.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163zvdtnxck.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163zpqkprvg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163mnqlajte.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163wgcykbww.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163fjuptmbm.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163zmyvaxdx.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163invvaqwg.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163xxhctpsr.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163mvdjkbhu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163hlfpmmec.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163mndugdog.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163emxsehsa.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163aantyxno.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163oxwfobda.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163dbotxvhy.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163agxafsjw.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163qrrgashd.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163xwdifrhh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163rryytnbx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163kpqvsedy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163hsitmltf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163cmnvggpd.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163lvtfbpos.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163weekflcj.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163raioihit.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ovjsjtij.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163bmogweec.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163opvruhsi.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163vmdgarxm.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163xireykjl.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163wayrdyzb.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163nopacqyr.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163popdhwrv.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163dccmmsbk.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163qqjaseic.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163gxixprzz.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163smvasbcd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163oktxcjlp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163yylrxazv.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163tlfjmxck.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163tkwdxocy.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ogchxtvk.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163hdbijlci.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163fmdjiuvg.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ymyyesxa.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163cgnehots.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163tbvgdgsd.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163doanainu.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ciyzhloo.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163vdcublzr.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163kouawknm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ovazgjsu.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163pktysokb.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163wpdrhihu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163gvheoefr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163ybuxuzdy.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163mcnlymzl.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163mugtrfmx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ucrwgstc.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163uubsjnxg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163acfxwczm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163tdtzuqac.html

[D15] 去重
来源：http://www.aibaodan.cn/163wczmdnwi.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163pmnzdikn.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163lkqilfrk.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163vnjpqsmu.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163voekbgsz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163zpvrnyzb.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163eilfeoww.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ddemhtzv.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163gkhasxig.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163uadsopky.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163lzvlevxa.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163occgdcyq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163xweixpid.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163fjdegyzs.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163shfasohx.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163xxnqyecn.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ogozcaxd.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163qywdsrvz.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163gstzhjuz.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163evuehdmm.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163cjukxdeu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163rpgalgka.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163bhwcgvvd.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163xxyktpzq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163jjcwnhdt.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163bvgezjzs.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163bhxtezxw.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163oagmrrbl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163uiqxbemf.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163tpixbkbt.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163jjrstivk.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163lzkfzejr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163tzflaxrp.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163marnhnnc.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ywtydsqq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163hreymviu.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163arogowut.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163mikfbujy.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163vqhjqsyt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163fbaqcfsf.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ufukzmro.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163asagxdll.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163cmflqxrg.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163lsyxvnps.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163laildxxl.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163isdiatcp.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163gxjkybjp.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163wfubpfuo.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163kgbdtymu.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163vexebfqs.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163zlrhxxtx.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163cwtbxmpw.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163niaybkql.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163fiwjhkee.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163ofmisrrk.html

Py:   x in arr
来源：http://www.aibaodan.cn/163vwswztdb.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163bjlzpivh.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163wzjghwqn.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163qhdmglgg.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163bwktdwvq.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163agafwdhg.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163sprvcgsp.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163bxcjmzel.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163eqdbbuco.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163zcbvdgda.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163mdtpbpmu.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163gcrewfdy.html

TS:   [...arr];
来源：http://www.sxryk.cn/163gedkenyp.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163drallvib.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163wdhlnoxt.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163wdilvttl.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163cipfxwae.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163yfxzoklw.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163lrdlqoru.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ecvmaiqw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163cvginpzg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163dltvnhas.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163dmqjinfd.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163uxofwzor.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163ornccrvb.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163fdllvfxk.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163wnoopdjx.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163ftawvxra.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163utxrskny.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163ihsjmene.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163idlewrea.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163rfagnphn.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163rcxfkaih.html


<!-- 参考信息 -->