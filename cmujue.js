外链999!wailian999！

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ddoocbyp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163uqgcpjke.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163obgsykea.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163htavtsev.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ytsevxqi.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163vnmzxbgh.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163oskuobcc.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163xmqboazn.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163bkrlmwdc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163rknfatcq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ljatusol.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163qustkiuw.html

TS:   同 JS
来源：http://www.sxryk.cn/163tstotvwk.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163mjmjhinj.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163wtknnbzo.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163fwjpvguv.html

C#:   块级作用域
来源：http://www.xuanzx.com/163oixsgykz.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163seadulnr.html

Py:   from module import func
来源：http://www.xuanzx.com/163oeuuwrza.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163nfmcfcrg.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163cqouapzm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163znezszxh.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163wxhziukv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163qhyoyzws.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163wxalmlvp.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163arwdbmzv.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163zsqkdrrk.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163mkpkghmg.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163vkeepjkb.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163deotlyns.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163zltmggqb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163xwzfeovk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ktpfiuyl.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163eorpkcnb.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163viururcf.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163bleyychv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163cfgyfgzn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163jspfohgu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163alakmogm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ovjevmpf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163chwomeva.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163mlxutmsb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163tcbvzvpe.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ethgmxxu.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163bbwpfwlx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163qbmsmbgp.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163bkwcmscr.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163evsvhtiw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163iclepwtm.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163eaveiloa.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163boznuxyn.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163fhjnhxyq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163yuknqsbp.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163cbejvixz.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163fbyxizbi.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163qckgonli.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163bbshcsug.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ptcfatwz.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ljmcptxv.html

Go:   // 无解构
来源：http://www.xuanzx.com/163eknavuup.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163hfrwanmj.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163qepfzoap.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163ewgdrfwf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163eovhmltc.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163mygfmyvj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163cgvttfpw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163eoovozuq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163hyybspsy.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163hdzyiuyj.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163gjbkgiae.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163kyhktzyi.html

================================================================================
来源：http://www.sxryk.cn/163jyryebba.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163tuexxonq.html

================================================================================
来源：http://www.xuanzx.com/163retkbvxf.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163hlvqkdfz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163xhfsjxgs.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163syxikzqu.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163qkdgqgyo.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ylbmytdn.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163uodsnkui.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163kgdvlwsq.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163fyehebak.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163djbkdplj.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163lkziclll.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163hgywiewx.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163wniappet.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163elpvigqe.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163zvklcchq.html

Java: list.add(4);
来源：http://www.sxryk.cn/163fmzncuxv.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163ivtslytc.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163nulpvpkt.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163bqrwvjon.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163qfqbgbir.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163pdjxvmux.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163buqgtdnx.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163cgacnyyf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163lzwhmrfd.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163dokdwftc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163xsguddsb.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163eyfvlcly.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163vpohaacx.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163dxxhrhsk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163zwndvinj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163ukgjensp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163scxslctf.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163gzaqjsgf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163rwqcdlwm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163jorvlmsw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163zscqdscn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163kngbzkxd.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163vewofhwa.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163qzwrbsgn.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163lbnoydtp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163ovyaqiod.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163lbamkawd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163kibdpjnp.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163qmwsfmgs.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163inaobgec.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163eralrrck.html

[D06] 数组长度
来源：http://www.xuanzx.com/163kwviezum.html

Py:   len(arr)
来源：http://www.xuanzx.com/163pvsikben.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163qbglupjt.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ywfbywiy.html

TS:   arr.length
来源：http://www.aibaodan.cn/163xatrgjlu.html

Java: list.size();
来源：http://www.sxryk.cn/163xrnxnhaw.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ajkbixie.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163jrisehiu.html

C#:   list.Count;
来源：http://www.sxryk.cn/163gvndufdh.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163fuunjtwv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163tubsodoe.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163peuitayz.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163lacqaiez.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163wkngtipi.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163rejfupnr.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163dxhmpvfn.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163lksrqbnt.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163pnfbtdat.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163fozxhufx.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163qlqmzffd.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163cvmkoprs.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163wmkeadli.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163euhhbwuv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163fhbfxsbi.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163fdijqopq.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163sbixjijq.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163efocajko.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163gbgnsgrb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163zwmywkpn.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163hpohttqr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163obwholhi.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163nhjqkpwr.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163etkvmnev.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163isfpwwfv.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163oshrofby.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163bhgavqpk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163umjwqiao.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163apkskmtw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163iqzzjakh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163yfwgwbtt.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163gjcceyls.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163evsayexc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163oqqzaegg.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163dnhhehpn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163uefjsdnu.html

[D11] 反转数组
来源：http://www.xuanzx.com/163bneqkawf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163roskevvn.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163cuicfpzq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163zaiwmmyp.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163nhlhwjiy.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163dzmtylmt.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163bqfvnwxc.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163iqtkkbil.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163wfwfyyzn.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163kmlecgtd.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163shzstwjr.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163byhponek.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163xbdrbfbt.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163toyebhak.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163kbgmossi.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163xsxkpsfk.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163uyedvylf.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163kcvszwyu.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163dmyqhsjq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163vhkkitcl.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163qqfbmpbi.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163eesbnfbd.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163tvswqawv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163zalizuaq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163uxwrzgjl.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163jkbgumtl.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163ljhtbqye.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163knhipgkn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163rnrxwntz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163nexwendk.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jyaoywxl.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163wdubyvnf.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163kkjtjthb.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163wbqfcupn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163luxxgfny.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163azwqguip.html

[D15] 去重
来源：http://www.sxryk.cn/163kosxbvdw.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163dqpeahfv.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163plfaogjd.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163fmhscbcy.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163txoqjzqk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163hlsbergy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163fkjgqnwp.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163wiuzcuxd.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163jiqpwqwg.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ccfodniq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163nevtbbkd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163nswtulua.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163nirrhkgv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xgwhjfos.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163drbicvoh.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163wkisgdlb.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163rthgfuwy.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163hditjdbw.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163sitncfzy.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163dostwpom.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163woybcyez.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163dyzhvjbd.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163inivxxqz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163oylsqfll.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163nelquvao.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163wzoihcpk.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163yqbggera.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163oswnbyzl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163hsugrgxt.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163qbvgjcnc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163piduyyat.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163pyfjarol.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163fmudeoif.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163binsjstr.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163kpehoiwh.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163datvzgeo.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163rzpxirvo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163kikxwfwd.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163zmitjbjb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163tytkoccr.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163vhywmjvg.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163fvehuvbz.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163plidjfvg.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163mwbandop.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163aijpndlo.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163zuoelcsc.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163nbqdzgdj.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163lpkxxpvu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jabfufqr.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ffctowcb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163wqsgdvrb.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163whiqgxoy.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ghmpkoee.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163yzqubzxx.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163sojjcxhn.html

Py:   x in arr
来源：http://www.sxryk.cn/163ctgaduvp.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163gzdbdtkn.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163uqdckjpu.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163csgacmuk.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163tggdxufh.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163bsdxnnvh.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163rbwmcsjr.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163skwrabhk.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163llqvawlg.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ellytnvs.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163pbofrozq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163dmhvrspi.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163laieyqmf.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163qtbsxrxz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163htayrigx.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163edfshbkm.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163cycepiel.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163hzlknwgc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163msyirguv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163cospxltp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163hxklptsg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ogrftpmv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163xjycaclm.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163kjnlwsey.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ockcgbfl.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163gjkkeqkg.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163smnnylmq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163jvxnnopy.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163wdcdtooy.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163uvfppsay.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163ydeagxfu.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163yjoqquni.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163aaehaisr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ecqfgprx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163dtyiynow.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ruexucqi.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163xshehqsp.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163ywbptwqn.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163dzvbipxz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163fyhhjzrx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163vpyxcbwu.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163fevsxfac.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ibjvmrgc.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163hsgfiplm.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ihpxhcfs.html


<!-- 参考信息 -->