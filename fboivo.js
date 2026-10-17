外链999!wailian999！

TS:   同 JS
来源：http://www.aibaodan.cn/163gioimybx.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163cpeawdwh.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163asgohlbv.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163cqthbtfv.html

C#:   块级作用域
来源：http://www.xuanzx.com/163yatavgzm.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163pixoqgtw.html

Py:   from module import func
来源：http://www.sxryk.cn/163bgbbafsf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163mbagjdek.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163tingwbua.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163zwggnxku.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163taywwzmq.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163sjokvpwq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163tbcztgtc.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163eyvpmbmn.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163peomrmzy.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163qndbhgwa.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163wlillhpb.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ffwjesbn.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163djrnjkvp.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163vnkjvmrq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163dqnpvmda.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163iokdihls.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163oqaszptf.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163albirhus.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163rgknuoqt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163stzvqtae.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163mfniomjc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163lliubvaq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rrnnsnvv.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ftzxpbek.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163lpgjsxeq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163czfocopg.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163znkhzdzp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163bbdafsik.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163uziumcwf.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163zmeoucfu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163hozjkwce.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163kxxjletk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163cxneuyak.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ancfijas.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163svsyzybi.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163yewfwibq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163qjjkwhqh.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163cauppfhk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163zpzucqos.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163qijkjotr.html

Java: // 无解构
来源：http://www.aibaodan.cn/163wcjdevre.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163jtmdbdta.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163rvfffspq.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163puzltxlz.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163jrolneul.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163lzwezsqo.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163lvmrhrlp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163fszlghvl.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163dryvarxd.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163izwpqlox.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ljqcymmk.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ecbddxdl.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163nwuadikn.html

================================================================================
来源：http://www.xuanzx.com/163lmkgduaf.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163iqxkkfte.html

================================================================================
来源：http://www.xuanzx.com/163hrehdnpf.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163kdgvwbbs.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163mwhnphjb.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163colnvoxf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163vnqawslh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ahsoynrz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163nuudocrp.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163znkhryft.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163kgbrlfrc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163mqkxuwrs.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163nnnqqhho.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163hyelozkm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ynbrvfaq.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163pzujpvmk.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163zzsrfwev.html

Java: list.add(4);
来源：http://www.xuanzx.com/163sesxuemp.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163ayhmtefh.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163txiwgere.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ojcgpuny.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163cnwghssz.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163opooqqqr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163hfbtawnk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163mvjzcptl.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163tanumtot.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ksdcnkye.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163uamqoowq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163xtqvofzj.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163rsjkntuc.html

[D04] 删除元素
来源：http://www.xuanzx.com/163zpzaexik.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163pncdwssy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163shnjespe.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163jekgtjze.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163nspmigrb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163qkarrxle.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163kkyqdgil.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163texrucop.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163zuftjqkt.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163onwxheiy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163omdvlovd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ihcqdbez.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163xfelsqag.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163tbfuktvu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163imzutmgj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163pjybfrwd.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ttdjgazc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163eqpqhvoi.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163xdyxbskk.html

Py:   len(arr)
来源：http://www.sxryk.cn/163wbbwbxle.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163llhtfqvb.html

JS:   arr.length
来源：http://www.aibaodan.cn/163rliyjeiz.html

TS:   arr.length
来源：http://www.xuanzx.com/163msuqrmnz.html

Java: list.size();
来源：http://www.xuanzx.com/163vnubboaz.html

Go:   len(arr)
来源：http://www.sxryk.cn/163cmksdfhj.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163aqjjtyyq.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163qfgmelnw.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163piigyewb.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163dacindhx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163yfvmvhyd.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163wcaytivb.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ugteuhpc.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163kgfgpgxk.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163nhjvzopj.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163qacvgkyd.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163kbdycqfw.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163fdqvrjpn.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163qtlbdcac.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163xxmzhuld.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163gmfgfeue.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163wtfrdfjf.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163mltcrvxr.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163setggzgq.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163bawtixlt.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163xtpalrir.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163qjmtnuta.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163wyjdiayv.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163mncxgumu.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163xgcolgmp.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163rmhwtuxl.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163seeqcqij.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163bpylnhnm.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163jrrvtdpu.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163qhjqkgsy.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163htnpmvxp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ncegrsth.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163guvzwaua.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163gaanhblz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163bjhojceu.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163gifdrlif.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163bkwxkrwm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163bojkfhpg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163avxdkiiu.html

[D11] 反转数组
来源：http://www.xuanzx.com/163sychobzu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163wonmcppj.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ovxqhkgn.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163surtzeho.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163mkemxbcm.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163xubtkocj.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163jnbnkyhk.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163iqwkxfok.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163vjzpuxoh.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163yvajssbd.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163dtbvrovl.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163nmvhzvgf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163inpxgnxw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163srmwjgru.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163xreqgtuy.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163aqbmijkk.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ydrusiyq.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163bnrzcvfq.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163xtmhuxaw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163axqxbyso.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163dqeebhle.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ckiyynse.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jqgkondf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163jcytlzvs.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163vkbmrlnc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163aifohytk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163bjzsnxrn.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163ehyepbgf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163fgpgggzr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163ovtsnswh.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163xwtydxur.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163tqjxeqwa.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163brqzltss.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163gtspefer.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163iepghcld.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163kzwspyxr.html

[D15] 去重
来源：http://www.sxryk.cn/163yuefvnoa.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163icyablqn.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163xdhkmhru.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163xeimdqka.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ulcoeply.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163xrejpzzq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163iuybiowf.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163xzncrmxp.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163yusqzirp.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163efidzajl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163zgpnnwnx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163hhbmgaax.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163jktyzamg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163hbzfkdwx.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163diqjepvg.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163lflepqfk.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ojtgcnpw.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163wjvbxqxz.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163afbjkqou.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163nteekaso.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163ecjjhyym.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ctooqyua.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163kqgespjg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163jvsajoxj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163buyxhvxz.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ednmyhqi.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163toiomlul.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163zevrdjfc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ftoqnill.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163jmubbcfr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163fwrckbjm.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ieufeqwq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163kvouxhrg.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163igkzltgg.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163mhlaydtd.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163tzfgoqav.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163cqucuils.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163xzartrup.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163khmzafdc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163totqdkdq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163snaailbv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163nyuomalo.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ybwsnowl.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163uvpafmyc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163vodrjeaq.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163dfzuurmr.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163hmktypuy.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163pdxzvbju.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163umjypsxs.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163syckgrzf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163jbnijdbd.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163mikajlec.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163oabajuqm.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163bonbytgn.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163lulkfguh.html

Py:   x in arr
来源：http://www.sxryk.cn/163awhskqeh.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163adapjurw.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163tcsgqlzm.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163udwufwfg.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163puokhboa.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163qgjtkcpd.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163ldtolvat.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163bjqztmzm.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163ugsroogi.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163kxzcrioz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163claygved.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163aqdugnzy.html

TS:   [...arr];
来源：http://www.xuanzx.com/163ruhftfdo.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163hojelvig.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ixbitrub.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163jboqjiwt.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163dzwvzrvd.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ueiuetrp.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163xxpgqtcr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163rgevxaul.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163nsmrgjdw.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163xwmlnqsy.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163fbuermmj.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163aegtjqod.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163uzjqezhs.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163rdcawvbg.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163asittrjc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163vchrzpqt.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163rugvfseu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163gfyrwspy.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163qhcwngji.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163njhesuca.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163fjipmcuv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163hzfkignz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163kwhetnjv.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163lzbylofo.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163qyzqccar.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163uxgbwpsv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163ikbufrkk.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163bplinhdd.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ohubszga.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163jjmkymup.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163pwizxbaj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163hajbuuvm.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163shcqfntr.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163omumvfyg.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163rupqxmlf.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163xowtcqhr.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163odpmacqx.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163fjnplkyj.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163eaqsxhuj.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163mwxjaruf.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163vnxeldkt.html

================================================================================
来源：http://www.xuanzx.com/163lxxtavhn.html

E. 字符串处理
来源：http://www.sxryk.cn/163pzwnlyke.html

================================================================================
来源：http://www.xuanzx.com/163omzahwej.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163bcwroghw.html


<!-- 参考信息 -->