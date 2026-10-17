外链999!wailian999！

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163rhfmimqt.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163hgcsgkuv.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163philguqg.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163vekcmqgh.html

Py:   return a, b
来源：http://www.aibaodan.cn/163zgnvvakj.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163hcanskou.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163zgksxlmr.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163koooqhkp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163rcscqrvq.html

Go:   return a, b
来源：http://www.aibaodan.cn/163waoaixau.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163rbwawbwd.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163bwzeijvt.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163wzabltsx.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163dwxwmtfs.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163pfehfhxx.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ecvbpsdx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163wmykhwmg.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163zwhzwwbm.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163nqaqkzji.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163qwfgiqxh.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163cxtisxis.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ecuwdoxd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163mxpzlgag.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163lsemhhky.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163hwgxdczi.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163gquybfvj.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163fcdejncx.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163talnijmk.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163zsohgxif.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ahpuhxkg.html

[C08] 闭包
来源：http://www.sxryk.cn/163ugfyccif.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163wsisguzi.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163xvimgftr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mutybzcy.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vzlnmzaa.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163yjzgergu.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ttadxafv.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163rajgfxqk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gdefhloe.html

[C09] 递归
来源：http://www.sxryk.cn/163ysnlhxlw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163kbfqpncj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163drscfmts.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163qcurzwgm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xltgjuia.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163aioblszt.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163avzxzrml.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163zulkefte.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163njqmscjx.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ichdtxnd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163tfnbuyff.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ncplubhz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ncwqrouj.html

TS:   同 JS
来源：http://www.sxryk.cn/163zfuubefr.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163kciotchu.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163crsnmeyf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163yhqrghyx.html

C#:   块级作用域
来源：http://www.xuanzx.com/163wfshylhp.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163bnbuwzsx.html

Py:   from module import func
来源：http://www.aibaodan.cn/163drhfagia.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163elyueydk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163qttijkpo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163ddthrkfr.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163iwcfdwgn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163mkearxly.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163xsgwapxg.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163dzzusmpj.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163fajtirhn.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163sjkfldqj.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163zhbjiddr.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163myvccilw.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163vgznoqym.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163zagufafv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163ytqfqcrx.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163qkawzfao.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ofsrheym.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163ynghaklk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163dmehstvk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163vgcctmrg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ozhapoqp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163gdggojvb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163alzcpkks.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163zpzbjaql.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163evgzdfsd.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163rcyswvvt.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163vqlaybts.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163utruljbn.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163mskmxbsx.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163azndqgff.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163uqtszyhb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163zhwlwoks.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163kswxlzns.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ysveoydp.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163inqeplvk.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163zmjkiuhv.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163rlwuyzfb.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163zswzgrju.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163sjgalneg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163waslgivu.html

Java: // 无解构
来源：http://www.aibaodan.cn/163odecdxxp.html

Go:   // 无解构
来源：http://www.sxryk.cn/163sukhchtb.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163nvzjbubp.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163botavfoy.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163zrqustaz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163wmvzqynt.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ghwszqtl.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ujjmltly.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163niwjoxux.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163esjynvsf.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163atmwdkld.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163tdrdckfk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163oaomvvns.html

================================================================================
来源：http://www.aibaodan.cn/163jyxtvvhk.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163vwtqcohx.html

================================================================================
来源：http://www.aibaodan.cn/163ioduhnfh.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ilrsenmn.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163vzacafng.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163sjnltuma.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163wvleehre.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163vahjutjs.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163wyofpuki.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163ayfoinyj.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163unvfdohn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163atwjjuxu.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163uidvijgw.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163piztjjja.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ottlgacl.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163ntyhsprn.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ksekklbj.html

Java: list.add(4);
来源：http://www.xuanzx.com/163llqhnniz.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163hlcltfzp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163nxhtpnjg.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163yyyvcwtc.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163twjumrjv.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163qgxrunho.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163bpojhtfu.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163pfymnalj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163vyrcfcci.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ohbcxcgs.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163gmonomrq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163gwccxmbh.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163kxstqxun.html

[D04] 删除元素
来源：http://www.sxryk.cn/163awejzqpy.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163dncjqvuw.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163fzgmfrsg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163vkjzwnwf.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163zkrcfmdj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163tgbxfpps.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163qqdjwzzt.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163juiavued.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163ftumwnba.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163hewkkufo.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163eszmtmlz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163mavzyque.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163drqorida.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163aibwlefq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163tsfwfafs.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163ipcjvepe.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163dzkseyaf.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163xqsaqnwp.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ubrhszck.html

Py:   len(arr)
来源：http://www.xuanzx.com/163hmjrwcdp.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163jhqkpayp.html

JS:   arr.length
来源：http://www.xuanzx.com/163ylzpfmxv.html

TS:   arr.length
来源：http://www.xuanzx.com/163mgfbcngx.html

Java: list.size();
来源：http://www.aibaodan.cn/163yiqsbrdu.html

Go:   len(arr)
来源：http://www.sxryk.cn/163tdrujvre.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163vflpfmrf.html

C#:   list.Count;
来源：http://www.sxryk.cn/163znmnemsq.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163jquweqes.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163huhdxepj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163knxgnpxd.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163xetdzpgd.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163pynayjll.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163emtbzkyg.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163sjqoxhbw.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163kqfgbtnu.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163blcyefvc.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163hjhjzysq.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163kdudncom.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ngxjpmmy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163lzhivdss.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ltlrxcng.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163spdwvktg.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163nmeuabws.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163hajcdrdp.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163bnokrbfp.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163bcrfjbae.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163vvjwkbla.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163gxgwpfyh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ibyaqhcc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163gecimjlg.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163wundhomz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163ynyevzer.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163zcodwtjh.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163afrorvcg.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163lompvsct.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163ugrrlgoe.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163rzvfndio.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ywulaqyx.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163zcgmufii.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163vagfuphl.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ftehyhea.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163ojhnkqwn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163dsagpfes.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163anekbvmf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163jqwwzbzb.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163iufmrfxy.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163punakoan.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163cjhxwjpw.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163obbfqims.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163amjkzrqx.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163idpnknca.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163fpuuxyte.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163hfrmfotm.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163snhytpen.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163qpstqrhj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163osgtajfm.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163bpfjgwzg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163hjdmluuj.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163vholrvld.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163pyfgwzzw.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163phtkzvwg.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163mnqwgmby.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163eaxzqgzh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163gkkkxxbn.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163alpuwenl.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163latpbqus.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ycjamtdj.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163mbgxthtv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163tqfjlqlo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163abwroqdb.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163gedlbkth.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163tayzlhkz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163qaqiwtdc.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163pdvnyigp.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163edowfukp.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163iaijudal.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163adzmaqox.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163fruswjhq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163llqhoviv.html

[D15] 去重
来源：http://www.aibaodan.cn/163jultsjcb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163dwvakxbw.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163gckmhbwv.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163tszwegve.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ntggnwoa.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163qivbluip.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163souaixdb.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163sqnnyunh.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163gbqaqvyi.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163lhdgtzdv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163mschconr.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163mkbxkjna.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163olmnvndw.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163gcskuaby.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163cdaodtcd.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163slywmfng.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163yoyzhztm.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163xwpusxhg.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163yhjstbwh.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163xusrrsex.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163yhaworga.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163fgmxvkto.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ywdmxpik.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163hmbwgobi.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163ofstnmjx.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163znjuvobt.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163chorinmr.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163jpzixbxb.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163nfpjaqfi.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163auakmscw.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163tpeldrra.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163ezokkcjo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163plloapdw.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163onlsblip.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163eedwwnco.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163lvhmzvzl.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163mwcxmqme.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163wlkyilah.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ujdrizdz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163rebkxshq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163hhewpmca.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163xdfhamcx.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163nwdocney.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163odosrpal.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163qgskhwvz.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163lpmqmcjx.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163iezokuve.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163himngdmg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163kcnlryqc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163kezwkjil.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163tuhuynci.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163yorjudxw.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163rrzlvwnj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163rxeyliox.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163wmnpzktr.html

Py:   x in arr
来源：http://www.xuanzx.com/163pnvezshs.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163prtdpgcn.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163sytmsblo.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163yioilrvj.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163zrzsyeky.html


<!-- 参考信息 -->