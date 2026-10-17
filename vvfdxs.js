外链999!wailian999！

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ztabxirh.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163lonrynkf.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163hvulrxwb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ockupjaj.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ibkmocqs.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163onwjytkq.html

[C08] 闭包
来源：http://www.xuanzx.com/163zcqzwfia.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163azjidula.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163tcjgonvh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163pbesjbuv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163pjinrqgu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163orikpiks.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163vjgpisbr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ybbrctla.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ztlyxbbt.html

[C09] 递归
来源：http://www.sxryk.cn/163qjcbyuzn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163mpkifhvk.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163paqdwjjp.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163uupncnba.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163arggtwtq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163zhhpqslc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163onylrmxi.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163sqkqveqe.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163vjqtfvcs.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163yzhvzxks.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163xaxlsela.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163qafjpszu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163wdpfgemr.html

TS:   同 JS
来源：http://www.xuanzx.com/163llmbiiji.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163rvicrgji.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163jwhopvpr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163mdjgqgfc.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ylmvxwye.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163uqhztyky.html

Py:   from module import func
来源：http://www.aibaodan.cn/163xhdjxeul.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163dtbrdaaa.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163fvxuirzp.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163tnwxngdm.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163bhcbqbht.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163tpdjzezg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163kzrhmnvn.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163bvjpcpqt.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163naspvsfa.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163gwthpjdq.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163vwplatjk.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163neuwepll.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163lqxgshlp.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163pgdpvmmw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163fdhtukih.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163jjppxipp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163frkbameb.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163cxupksgy.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163dpzuzizj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fhuurcis.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163zbhzztbf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163rfetnhtq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163emarocdi.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163hkqivjij.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163duittknl.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163nhxynosy.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163ikfqhtbz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163wcjfpmje.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163xiaycugt.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163yyiyjexq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163lcxzmnuz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163rihfahyk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163llkfwsrw.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163iscfanzy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163mgmwmvbf.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163gqokcptq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163tllkklij.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163nzfygiwf.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xtgzlfwi.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163xgnkowbw.html

Java: // 无解构
来源：http://www.aibaodan.cn/163gqimfvwm.html

Go:   // 无解构
来源：http://www.sxryk.cn/163nhoywqsf.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163fkkjqkwp.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163buegnkjk.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163trfxawqe.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163wszkpwdh.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ogpnxulx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163pwhdqyjk.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163ecycdsun.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ljgivmpc.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163xvlcqdpr.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163bbtbtkho.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163xkrjekgr.html

================================================================================
来源：http://www.aibaodan.cn/163olojkpzk.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163qhrmrtjr.html

================================================================================
来源：http://www.xuanzx.com/163ilqopfqt.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163dkxuwbcv.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163cnbeluau.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163pzmngrrk.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163mnjugtjx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163qxjxqhjk.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163dsdsjnal.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163rwnhndan.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163vjruppsu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163lqcvyjmk.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ufsryokh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163snawrbfi.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163fvufdpca.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163dzpnrqkw.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163vocjdtyy.html

Java: list.add(4);
来源：http://www.xuanzx.com/163rzerkpyw.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163zczohqzy.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163ljhbwqox.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163hgsivvdr.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163vckzfhhr.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163pdiwudtm.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163iimacykv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163qiivbkal.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163cyjvwdxt.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163cmpmxhtc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163lduxkdnu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163texkmlme.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163winrrpob.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163uwepfqxi.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163gggcwwsz.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163qskdtnlg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163zptjaxxg.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163aqxdeiyi.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ihhaxmbs.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163gznsxree.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ixppolft.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163gadqaayr.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ugqwtdgz.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163rkmmuspv.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163qamcpxak.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163tmvakbck.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163ksiccnrk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163gepmnixa.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163dxiuhxdt.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ajxcbony.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163lhseprlx.html

[D06] 数组长度
来源：http://www.sxryk.cn/163qyinegvj.html

Py:   len(arr)
来源：http://www.xuanzx.com/163jlaithfu.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163wmzlduyt.html

JS:   arr.length
来源：http://www.sxryk.cn/163ifwwlrul.html

TS:   arr.length
来源：http://www.sxryk.cn/163ijmowktq.html

Java: list.size();
来源：http://www.aibaodan.cn/163kwkhfthb.html

Go:   len(arr)
来源：http://www.xuanzx.com/163djerfddh.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ykfvninh.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ivlhmiqm.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163sccxynoi.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163udjwjggg.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163crbkcldp.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163juxillhj.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163cnzwxszq.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163kilbplvo.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163vilafkuu.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163masjyqqa.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163wlfjzsvq.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163xmpzmqad.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163mhwqgdiu.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163yiqilujr.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163fpxawlln.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163pdcehuxy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163datnitpw.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163nesyrvge.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163mikftcfh.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ehhwwngk.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ncuodbwl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163zahoqzub.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ykrqfrsx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163msafstov.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163jzmdwivr.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163mbrmpbwe.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163lfgnwaqz.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163qocapvby.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163mfemoxup.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163bidqbscy.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163bsmwyttl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163fbjdnfop.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163zdasajha.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163wyjarayi.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163csftihoc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163osfagcvs.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163besfpfic.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163efvnhcza.html

[D11] 反转数组
来源：http://www.xuanzx.com/163coxlhtcx.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163qzfjkcgg.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163yrvftigl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163fdgckrwa.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163dhlrokbb.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163sspftuwk.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163zlizvfse.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163zqezjqvz.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163vmitojff.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163tccxqvrb.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163uzkvpunu.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163adkmvmsq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163idfujqci.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163qyvtefdp.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163eetsmqwm.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163qtebzewg.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ejdjulbz.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163uignhcsg.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163sxljfopu.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163bfgnkjeu.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ytezposd.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163iaichsfh.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163vooelokp.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163slqksord.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163xtsrnihc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163lzpyftzy.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163xjognmmm.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163hamllfoi.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163ybsscgxr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163jvuvdgsz.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ifybzkye.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ypycoyoc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163xgrmtemt.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163kvtunymd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163bslgaqja.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163ecgcssvj.html

[D15] 去重
来源：http://www.aibaodan.cn/163yagqtino.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jfgltbzf.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163jycbmtby.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163idxrsdar.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163blppbbgb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163qtujedma.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163qoidkzys.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163zwwenybb.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163khzkphkw.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163zikaedbi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163sykusgdt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163yefnnixq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163pgprofvx.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ffuikmkl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163hxdcdhaa.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163dihrzsoh.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163enwpfpsf.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163kskcoyyn.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163dqoikpqv.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ixgapfte.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163hzftcujt.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163jwqpqlzn.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163wwhlwzyo.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163vqldazex.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163wqusssvy.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163auiueuaw.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163jaesvccm.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ehupunzz.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163xgqhrcar.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163whgefqhw.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163aafqkenp.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163lfrcdoiw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163owreexdf.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163vnvaayls.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163jmoltpgt.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163wahfaenx.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163amghdvrb.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163nbhzqosi.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163mmczxvdq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163tmuldlzn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163asxumvto.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163mzhoqnjf.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163stijtrta.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163iukemnoo.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163uqjzqyia.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163phejfoll.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163qpgnzaqb.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163nnwrxngz.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163qmjqjaoq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163awyiyjns.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163fhjewfsp.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163safvnlwt.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163znhgjwgx.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163qjrykdpx.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163dyjpqadk.html

Py:   x in arr
来源：http://www.sxryk.cn/163euqutmxo.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163lzqnwfqj.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163exlahawk.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163gurizecq.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163mrziutaw.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163sdxfhfsb.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ioldinal.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163edrcwghy.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163rsokekoc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163yyoaykmq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163cgbpjdyh.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163lhascutu.html

TS:   [...arr];
来源：http://www.xuanzx.com/163kawpwusq.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163qsgabrot.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163zmuhytmg.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163kornnnuc.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163mvziifcn.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163wzovkdod.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163yqnykipc.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163jqmrqkkj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163evkwgmwb.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163uhcvorrc.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163sgsocehw.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163oajsreqw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ywhwmzjv.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163stxblrhp.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163kgogrpsv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163fokjtdwi.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163kahsvspe.html


<!-- 参考信息 -->