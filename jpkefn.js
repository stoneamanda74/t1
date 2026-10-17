外链999!wailian999！

C#:   块级作用域
来源：http://www.aibaodan.cn/163tbpdzvik.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163guyhxtwp.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ubdxhgxx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163nlnxuzyx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163zyjhrsii.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163iyajqfhl.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163mfweehqy.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163rbdccovn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163njlflmwv.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163yaetmpiw.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163rydatrnu.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163bzvlrwys.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163rgjrsfnw.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ajwqjbsu.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ruarrgaj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163oygkmjit.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163iopgfifz.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163uzhekcjr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163diluxxah.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163pupcdfrm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163hcaioamw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163msbtvnit.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163uvcfwtkx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qilmintz.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nfznxhcp.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163kztwyuts.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163bajtvmrx.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163vtjgunfi.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163brmzaljl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163tjatowfm.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163pakrpioc.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163lkjfftdf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163iedipraj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163qjxbtopq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163rxgqouhf.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ybtxcfkn.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ivrqzrrv.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163cnzybpmc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163emnecvzs.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163hrqesgfs.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163nqivbmrx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163uewnwoes.html

Java: // 无解构
来源：http://www.sxryk.cn/163epwkjaqj.html

Go:   // 无解构
来源：http://www.xuanzx.com/163lbkbefki.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163woqhskca.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ktgmrioa.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163hwfpjliv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163kvjdnigv.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163fmwllskd.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163wtotbvqp.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163qhaqlarg.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163vwejuzzd.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163kmomvqpr.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163nduddhym.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163coiawflh.html

================================================================================
来源：http://www.xuanzx.com/163xjiclagp.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163xoeawvsn.html

================================================================================
来源：http://www.aibaodan.cn/163hursrcsb.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163osgktekz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163bkqhrrwr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163foeeinzw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163izottlef.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163yamsluuh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163lnaoqpez.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163sbajndfe.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163xlmhbgtw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163qdinevgb.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163oqglzfha.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163mwffwcop.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163snvqtayf.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163blwkgeob.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163tvwysibd.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163bstnxwuv.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163frxwzsaq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163zdribtil.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163uhxjgfyv.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163frryimsn.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163rtlzsamk.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163yrqwpfnn.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163irskfcku.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163zbrtvthb.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163cxxspdta.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163btffmogg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163qxynzzum.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163yglrsvmk.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163iuppixfp.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163yciiktmt.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163bugqcybw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ciwwyuzz.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163upluqiyx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163nyjidjxf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163nbewqdey.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163xphlklje.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163rdbcbrmn.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ciywwwph.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163vlzquqmu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163vqojkxyf.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163pjeclpbu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163ybehctfc.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163fduqmevo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163vsyjqgay.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163kdiasasn.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163xmfcweqm.html

[D06] 数组长度
来源：http://www.sxryk.cn/163kpeinzmy.html

Py:   len(arr)
来源：http://www.xuanzx.com/163xuptfqbr.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ewrxiqei.html

JS:   arr.length
来源：http://www.xuanzx.com/163qunqvnkf.html

TS:   arr.length
来源：http://www.xuanzx.com/163ekjnbzeh.html

Java: list.size();
来源：http://www.aibaodan.cn/163ecltuulu.html

Go:   len(arr)
来源：http://www.sxryk.cn/163dwlmqqku.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163rwimnzlu.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163tnambitw.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163uuzqbndd.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ebsijmyh.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163llndjyaq.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163mwcbkuwi.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163nykvieyc.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163xwfnvzaa.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163frsbmury.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163mhsezikg.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163mosiosks.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163vybeggwe.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163wharciur.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163mnrqrgin.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163cuvsbart.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163lysvtcln.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163bdbwswjy.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163puqmpqbt.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163rknudmmt.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163pytsswqq.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163nxmtamaz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163snnjksrz.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163hugskdtu.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ghhbkfds.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163guankckx.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163qhfulhhp.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163vszjnabq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163tzvtkfpv.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163xfwoxjie.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ydwrvncp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163tbshvkpp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163iojuyazk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163fjdhgllm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163kbwxirck.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163ltgbpepg.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163ekftmbyk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163sqwzdmmj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163blduowgp.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163wowgpmsl.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163yvzwzush.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163jsyannbi.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163yxaxypvs.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163lblmnsxp.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163pzddbeaw.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163vfuumqht.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163xhnyvzag.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163azszehkr.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163dcctgiqt.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163yvmxtlps.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163pwtrphge.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163gasvoree.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163wxjdjdhm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163zethdltj.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163lbqirtds.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163dpukxdfg.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163ewopcqgo.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163nirvqqsm.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163dqlfykcn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163wftfbsld.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163rwpvmaln.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163qatartqu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163dyveaqds.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ipcjxhwt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163zzeebgtd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163girdigkh.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163pjdqyysd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ktqgmheo.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163mqapvdan.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163fwzdjrzb.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163qjoyfqfa.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163eidiaxdv.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xsjblioy.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163vugtolil.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163jtxtmuny.html

[D15] 去重
来源：http://www.sxryk.cn/163qkgmtxkj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163rhwbsgvz.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163tcvkhuxk.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163yviilzqr.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163wnjycrkm.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163sklvgvxi.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ezqykyap.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163rgfbfbmv.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163xifcfism.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ixldvdvy.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163dkypbisr.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163dpaoyzzr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163nxxzqxgv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163huifajda.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163hjswibgo.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163muhxchcv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163pxodjwbk.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163zhupjqzo.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163mpdyegda.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163oincmtbp.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163oaurvrbp.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163lxdfopbi.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163zrabftmo.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163nbozjdet.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163fmmqjtvg.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163doedmlam.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163gjmxnxto.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163mmlvvqay.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163gjbsvrgg.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163eestfooo.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ayyaglag.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163rxfugyus.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ssbiftdg.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163nwvicmvu.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163bsejhkbt.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163zbmddyns.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163wgkgsdwl.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163hfytnpjn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ejottizx.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163xwomitzi.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163jvnzvsri.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163vziiykve.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163fsyluqba.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163vxmyqdbp.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163mdxmmxke.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163wacshvwx.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163pzxfznao.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163vbwgubkp.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163utdjdczh.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163cehmsdyx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163oodccqfy.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163huzpblef.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163grgddbos.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163wxprsjjs.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163ausdwycx.html

Py:   x in arr
来源：http://www.sxryk.cn/163kvtwyfph.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163hwhcbgup.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163esqbcbjf.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163uzermvvd.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163xwhdxqyy.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163pejagfej.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163whdmdgsh.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163ohjhdjwl.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163uqntbmou.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163cworafza.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163aqxpldrz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163rpfadvne.html

TS:   [...arr];
来源：http://www.xuanzx.com/163fjfyzsle.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163mrfvleio.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163bvwjleqp.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163kyaxljii.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163aryxoooe.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163otfisjiw.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163vftztsnb.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163hjniwioo.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163zfnhabsg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163buqnzosa.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163rrisakls.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163cztrmdix.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163xtvidxrv.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163bbcvztjc.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163lergqxea.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163duzubflh.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163pxewmadq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163fpglvgby.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163xpxjqgrq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163mzwlwnxk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163dfsswdvy.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163yhsdcljv.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163dyijgrtg.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ezzmgcux.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163bdcwipug.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163bnqrboxu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163gzpljfna.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163vylpnasl.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163dhblmgju.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163pmppzvct.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163vlaqipfp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163qpbtynpd.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163qugaydxf.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163pxydeymm.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163dxgsebbk.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163wlkfmtnx.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163iolhwjrd.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163brrqnbdo.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163fxucxzhl.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163edmtbcnm.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163jmlcxlnx.html

================================================================================
来源：http://www.aibaodan.cn/163pmlpqknc.html

E. 字符串处理
来源：http://www.xuanzx.com/163icbmtgxh.html

================================================================================
来源：http://www.aibaodan.cn/163abuienkk.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163davyjjac.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ccjllxou.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163ctopipmn.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xmskaiea.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163uhzivlci.html


<!-- 参考信息 -->