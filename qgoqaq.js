外链999!wailian999！

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163bfvnnzdn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163qynylvrn.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163wthpgkiq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163sdnujiph.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163cwxeeevg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163etqbtpks.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163kdpkusvm.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163fjyewqem.html

TS:   同 JS
来源：http://www.sxryk.cn/163tdmbojom.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163lfgidxai.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163swscwyrk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163zeqheljp.html

C#:   块级作用域
来源：http://www.sxryk.cn/163shckhkdc.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163pszodmih.html

Py:   from module import func
来源：http://www.aibaodan.cn/163gfvxdozy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163dhtqogxy.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163qhzhzuuj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163pcosqkcw.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163xmoenxgh.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ibmyldfe.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163vcksbdsm.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163fkgzfnmm.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163rdoiiiye.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163nreyivnh.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163gvdaupfk.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163dcrzohkw.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163srtoplfq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163xihoucma.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163zrusywcw.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163ynfmoppn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163mjpkjjth.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163eqywallz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163anafvbcm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wqkpkkwb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ceiudeoh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163cvrghppx.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rxqmageh.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163kocqrmvf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163fxmprrcs.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163wpissjqp.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163togapxts.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163tkhjnrhm.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163kswjwtax.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163zrnwkzgx.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163zuudikat.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163gfhasumw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ahnkaelq.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163iktzbnmj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163kzviahrr.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163cznhhjti.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163tdklczuh.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163pvykeazo.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ureqpntr.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163reacxjrv.html

Java: // 无解构
来源：http://www.sxryk.cn/163cnjwlvhd.html

Go:   // 无解构
来源：http://www.sxryk.cn/163imxwvlfu.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163coswiqke.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163hpflwgko.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163lvecrfvj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163qxegkugq.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163xzjphbxd.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163zmurjchd.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163qjozmhsj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163finartdd.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163kqdppmph.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163mjrfuzze.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163rkkwrgfi.html

================================================================================
来源：http://www.sxryk.cn/163tbpoxlsv.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163cxssqemv.html

================================================================================
来源：http://www.xuanzx.com/163wyvpmeys.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163izmrkewi.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163kttbpqgs.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163qnkaklce.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163qosedibn.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163cjschskd.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163huigxspr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163bvolxiqj.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163rgaklxfd.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163xlbdiqcr.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163quizimuq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163mwbtrifm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163vivtkwfe.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ldsrnthb.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163nogjsrbm.html

Java: list.add(4);
来源：http://www.sxryk.cn/163eekjrgia.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163hprwmjtu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163ggvgvdso.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163swodldso.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ferlvajn.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163jiwvrsqk.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163hdlumucl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163zikryxth.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163pwvoggxh.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163tgldfmqs.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ekuwtqjq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163polhfbtk.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163dkyknhyq.html

[D04] 删除元素
来源：http://www.xuanzx.com/163eeoagayv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163raacwzia.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163jualbdbb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163wvmkmufw.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163mrbpfwlo.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163siyivgri.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163rgylnlua.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163hyzqxdgb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163doplalyy.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163eimebsar.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163mufnwiof.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163dwbofinc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163fnliyndj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163honkplso.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163xuegdmts.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163xbkjoknn.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163deyoxlku.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163nkgexebh.html

[D06] 数组长度
来源：http://www.xuanzx.com/163nigfxqlm.html

Py:   len(arr)
来源：http://www.xuanzx.com/163btzzbbhp.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163fyzqwxne.html

JS:   arr.length
来源：http://www.aibaodan.cn/163enegigok.html

TS:   arr.length
来源：http://www.sxryk.cn/163lonaontv.html

Java: list.size();
来源：http://www.xuanzx.com/163zioyushb.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163fpbefswc.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163xmuyazig.html

C#:   list.Count;
来源：http://www.xuanzx.com/163csrfkxrw.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163lxmklrtp.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163wonphxdo.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163zxvocqxe.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163sffxricy.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163arujcxrj.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163vixhmomn.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163uzykpouk.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163suqbfwwf.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ovcoqwki.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163sgcsdkbl.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163hypiijmx.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163iewzjcfc.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163nteqjhma.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163lsbsaooo.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163osqkxqrt.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163jpqnyoxf.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ynfmqlgu.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ancgadfw.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163plstsxtr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163orfwnxxw.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163lwviqenx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163mejuczxz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163buiwxgoh.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163jwtjgbao.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163dsohqznb.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163oxxrhyxl.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163qccabfsd.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163qprbtavb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163etzmxgpq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163pwoilpdr.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163fxuflwmr.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163jtpgdntb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163cnswsefe.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163jplbhwag.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163cilxexjk.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163mzzralpi.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163wsjxiowc.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163fgkehbrq.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ejrvlzkx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163rpzupxkc.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163zttjbkbl.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163yzdjqdfw.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163jekxrmvq.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163wywsitkb.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163zunouedu.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163rebgchkm.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163nsqvjqxf.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163xplvogqi.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163uexkovqy.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163bnhsziwg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163zldbjrjj.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ukcrnhis.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163vzovpzec.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163gudydcoj.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163czjmmcpd.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163okxvnboa.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163hayrsxux.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163zcmonfkz.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163vscxptxf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ivuiuqir.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163pekusmsn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163fqdlfivi.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ocnlerqf.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163bghyghko.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163zqbvdnni.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163exbqdxmf.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163cubmyjrv.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163duxymzgi.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163qhhyekrt.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ducmwhfp.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163cfgcysgk.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163botztdxs.html

[D15] 去重
来源：http://www.xuanzx.com/163gvwfhydw.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163xafqdxhb.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163aauicdgt.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163tmpfmalw.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ktgphlba.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163ksaiaiaj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163hoxtjvuw.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163zfaqzakx.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163uqfjzpjo.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ybwfsviz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163tjrtnidf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163injibkrs.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163yixuoadz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163qxutzbcc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163oamvjdpf.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163xijwjrff.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163cykalqlc.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ybzpswla.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163etyhpbtz.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163znubrbtq.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163kjfvzfrv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163uetahuqh.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163iqhahnye.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163agsfayah.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163gfnjcheb.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163gggprmfe.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163gnepqnva.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163mlkaolpr.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163nunweudd.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163cubspmrz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163aafggrbx.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ezjfohyg.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163pizqoqqy.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163hzakoiej.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163telpxtip.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163jhasvylf.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163zhsvcrsv.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163njbyjify.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163lcuzcfhd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163xnoeoczx.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163iasqmedb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163lykdbumn.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163esgrxchx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163nxvxvkey.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163yewpvdpp.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163hlesdqjl.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163ykhpoiop.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ntuxlmwv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163xuiyyeqq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gravqygb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163dbfckwbn.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163apljnnle.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163dqltyoit.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163wccbphzv.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163rzcpxcbx.html

Py:   x in arr
来源：http://www.sxryk.cn/163sjefsxlk.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163vmuixtcu.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163zthaqkxu.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163zoqeeqyb.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ymshdewd.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163paascxra.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163swmrmdvw.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163aaxutuiw.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163farlvhdg.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163heurliib.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163vnrgcrvz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163lxxfvmis.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ammoxbtw.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163quezrxhg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163xtqvwnau.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163xcraavgt.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163nngysgks.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163wgziooej.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163cahjvctm.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163oivkigjs.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163iyqzculd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163sknroiyz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163zntblvuu.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163qoouplrm.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163rtdbyxjm.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163dfsgupdg.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163bbqhlmee.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163egrquonp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163xakwjbbc.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163dixucbtx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163aalpvfnm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163ddkfhfaf.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163yugncfmu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163zcqwcctn.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163dcoiqwks.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163pwkqrtkm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163htyyxkaa.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163vsowleju.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163uienzbzg.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163kypmkhda.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163zcomscjk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163rgucpphu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163wmgxcedt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163chwoyzpb.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163waknsgpb.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163jhdcndvy.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163neekkxji.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163nnrfwkzp.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163tigelrsz.html


<!-- 参考信息 -->