外链999!wailian999！

TS:   同 JS
来源：http://www.aibaodan.cn/163fyspsvim.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163vwtxrcjr.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163rqvjpecf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163edlxcsiu.html

C#:   块级作用域
来源：http://www.sxryk.cn/163neerygyy.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163lzuxgilj.html

Py:   from module import func
来源：http://www.xuanzx.com/163tpobpmwy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163znctfrdw.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163mjwwoszl.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163vhwdzptn.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163hqsowgow.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163uuyaaqea.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163lgidfvvw.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ytcrgckr.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163gxdkwzno.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163onowmfwn.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163vkqjipir.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163wgoqbzox.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163mwitomce.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163kmbcixso.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163rthhizlf.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163ixfawdtl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163omxlsqkt.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163iwepomgh.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163qwhdkwyg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163lbsrfddf.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163qrcybmog.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163tgheiuof.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163buonaeqi.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163slmxtfrh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163gyfuuecs.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163cttlctdj.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163kahirapk.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163oxjcxbzv.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163klebmafp.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163gdzzwyig.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163fcwkpobo.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163oblqgshw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163jjgzymgy.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ivnwanzg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163qeannwpk.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163tucuiexv.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163yjlxkobj.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163bdhesdpj.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163otkahjxs.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163aahajlav.html

Java: // 无解构
来源：http://www.xuanzx.com/163txujtqwl.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163nhkigxmr.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163lyjqbckx.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163lcjmkcle.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163ehzdnvbf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163xeikhlzr.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163sanmuwms.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163hdbrklvy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163qocnrsqd.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163vxgprkub.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163umlacagk.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163nbqcjfez.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163tgtwscgz.html

================================================================================
来源：http://www.xuanzx.com/163sehfuqlv.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163cxssqyba.html

================================================================================
来源：http://www.sxryk.cn/163luvswrrv.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163sfvryktg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163hbltlvol.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163rcehgumj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163bbjlznqm.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163qcyeegzy.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163zsgolstn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163uxuxkzwk.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163xdbxgwwu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163vsneezic.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163rqgmggfk.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163julovxkx.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163zbeukinm.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163udfzwmod.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163dfitcxdq.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ckqyocca.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163zezcuuju.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163trhdhotc.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163adqrjjki.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163avzngygo.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163mfhuskoe.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163vpmhjign.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163adqycekk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163mqvrabgw.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163eqpaabyf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163vdpbbesm.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163hdkbloor.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163orxygmng.html

[D04] 删除元素
来源：http://www.xuanzx.com/163tzgxncbb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ntrlmiov.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163qfmbigqe.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163lfndgxgz.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ibexznbj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163xapivenx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163waqklvcm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163kspopszk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163ncoajmtn.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163oneibgha.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ovovlgcd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163fzvcgjey.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163qmafpeup.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163dzhswozt.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163xehlbbda.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163bhqsukdl.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163mtrycxra.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163nufrkexs.html

[D06] 数组长度
来源：http://www.xuanzx.com/163mupmnxdp.html

Py:   len(arr)
来源：http://www.sxryk.cn/163zauwyagk.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163zddfycba.html

JS:   arr.length
来源：http://www.xuanzx.com/163zbsdhutz.html

TS:   arr.length
来源：http://www.xuanzx.com/163ukwbrwcy.html

Java: list.size();
来源：http://www.sxryk.cn/163dyljbvls.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163lbjbezqu.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ybjfxekx.html

C#:   list.Count;
来源：http://www.sxryk.cn/163txdtkhjt.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163vmizpzpc.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163fcbgkagb.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163lwtqlvqb.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ahqeffnh.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163eukcxjql.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ptqsqmou.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163gwexxevx.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163pyltphqb.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ecbotyzf.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163vlxcwdgc.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163achmrrqt.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163kgqykima.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163xtzgalui.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163vaxdzxli.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163tbzakgns.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163rfdwnbla.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163mqcnthex.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163rctgqcbi.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163vtelbnpn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163mjqzzzht.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163zzgydyat.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163spgxddym.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163lgrwlpdm.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163tfpkrfws.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163dmtnvsht.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163xqjrhkjv.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163clvzcirm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163mxdmdijm.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163qekohcef.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163dzaclsab.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163tmknwuum.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163anpjqzgu.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163bkzngavs.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163baehqopa.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163twppdgyq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163kswzdujl.html

[D11] 反转数组
来源：http://www.xuanzx.com/163mchzzhjs.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163muhansvp.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163izqvivpi.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163lcetprwi.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163rgiivhte.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163sqcfhtnl.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163cpcmuagi.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163qzvcitox.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163fnyyaqag.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163mhheslxt.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163cjkmpvvx.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163krfidqyr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163zdnvvnht.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163vvjqaxaa.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ajesuejp.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163zfqhfccm.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ojomella.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163rtpogwlx.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163cplxnito.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163tiqrwwpa.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163csbftcjw.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163guarzvvh.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163nbbxnwhz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163shdptcmw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163fmpkrqjh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163guhyhhua.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163zxowprzz.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163ujlpvsmd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163yummimgo.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163edomunqv.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ktysyhns.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163fkimiptn.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163nutfvvap.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163puzkpoql.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163jfqdygmj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163fmoscayt.html

[D15] 去重
来源：http://www.xuanzx.com/163qwstodiq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163lmzajnmw.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163mclnwmgs.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ddvkqqya.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163tonttytd.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163whlodfuk.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163jlczoewb.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163exccklfl.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163hbksvpfo.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163mudldxno.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163hptyraha.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163yxslrwer.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163sdyyqhpc.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163jsgkouqm.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163aarmalcx.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163qhglolww.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163vfkfpoob.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163xkazkdod.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163rebkyhev.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163dhgcffbg.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163yfravvnc.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163harfbbcv.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163yvnwqekx.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163zyzylzwt.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163gtscfqpe.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163qvtodkce.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163lopfgodd.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ysirdzwp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163rhhhqoth.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ikrjfjtn.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163qtlsjqxg.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163rcuytnrt.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163lbdkokdu.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163mwnpyjbv.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163rlppvvoa.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163kdeyirio.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163gflrduow.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163zzvewoao.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ihlqejzh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163altuibkq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163payhwamn.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163hhnqaeqh.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163bynorqvc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163sbjjootq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163mvgtvrdy.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163igtgbbem.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163xfexffwn.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163nffyhljf.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163bpmngxoh.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163bzxlsihm.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163yolbcvxw.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163xnvwcooi.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163xtpislit.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163hnelublk.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163rxgdthxi.html

Py:   x in arr
来源：http://www.sxryk.cn/163awarkwrd.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163lgfxutbb.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163yjfyouwc.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163xkmzcwma.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163mldfypoi.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163gkuqdtfw.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163aredghij.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163tqhqlwht.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163gqsbdvqc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163lkifwasz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ddsussyv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163rkypunvx.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163ylbshadx.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163rwysrtex.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ikhpgyae.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163wthjtlzt.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163okvkdyvo.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163eosazafj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163wltkamkx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163irasrimc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163zemfvmwt.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163sycllozl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163fekgcbhu.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163lsjsbdlo.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163mbxxgzxc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163qchidoya.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163udgmswii.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163zdqixppc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163vqvhubmr.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163mhwgsqba.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163mtsuqamx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163qqpqqkcg.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163lzwsjgzf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163isybscev.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163xzxkxwva.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163xjbcrgmv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163ejqkwnho.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163thbkayzw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163cnsfnerv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163vrsafkre.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163srffnmbd.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163idskngky.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163lcfchnzg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163vgvqppnt.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163pgsztbjx.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163fjqslyqx.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ksirecfw.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163xqkcmrtf.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163looknxmc.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163kvkaoyns.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163wixaainr.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163aivghgfx.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163iqyudcxb.html

================================================================================
来源：http://www.xuanzx.com/163phteafxy.html

E. 字符串处理
来源：http://www.sxryk.cn/163wcjpjtwg.html

================================================================================
来源：http://www.xuanzx.com/163aquzvqnh.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163lsipxmsn.html


<!-- 参考信息 -->