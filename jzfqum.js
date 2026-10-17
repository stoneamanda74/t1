外链999!wailian999！

TS:   同 JS
来源：http://www.sxryk.cn/163xqntpcnh.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163hiciftbp.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163hikgoyzw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163vehumhis.html

C#:   块级作用域
来源：http://www.xuanzx.com/163vfiplhno.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163akrxrchl.html

Py:   from module import func
来源：http://www.xuanzx.com/163kdxchjid.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163orxqxnxm.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163gfrhtlcm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163zcowhwwf.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163gbilzssi.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163smlsxapx.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ddajnlje.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163hgmstlvb.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163aidmjjdd.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163jvgsafzt.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163tadpgdep.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163adqycrcv.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163opqauswi.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163goywdhvy.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163pfhlbzzj.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163onlppppw.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163mmmimasi.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163npgtvkni.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163xpgwsbqy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163araoyvou.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163yoipfhxw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163wydayyxl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163oqdasjjh.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163kofnhfjs.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163twnbhwnh.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163abyzehvn.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163mfyymebw.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163niiuzmjh.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163uubrnzeq.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163vehhlzvl.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163imskrljh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163mmrubiza.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163dnfyivzb.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163itireujf.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163zwuwtuhi.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163nmlwxmol.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163lursamgt.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163akuelqso.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163tkmlbfjf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163vbvfdozs.html

Java: // 无解构
来源：http://www.aibaodan.cn/163sfvtmbgm.html

Go:   // 无解构
来源：http://www.sxryk.cn/163xrbbtydp.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163jyjtvwpl.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ejgmaljc.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163fszmojiw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163nangfxcs.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163hlpmgbsc.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163zacihowu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163elqdnxcd.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163bqvctbkn.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163nwkjpezn.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163tfqhxpbi.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163nnpbkgfq.html

================================================================================
来源：http://www.xuanzx.com/163ngtpjusv.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163wklvfzjc.html

================================================================================
来源：http://www.aibaodan.cn/163dnkuvxvb.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163fwsznben.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163dsyjjfef.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163wxtmcvpy.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163oenblhvl.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163fkmigyxo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163emmnuakf.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163snnzixqb.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163kmdrrmig.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163hygnmtiy.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163icdjouly.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163htwdusak.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ufjpakbz.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163oyczkzrb.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163qmeluivd.html

Java: list.add(4);
来源：http://www.xuanzx.com/163coldmrjf.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163xobqezoa.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163qqmajgdo.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163lpdxoibj.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163bcpnoqhx.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163bqgjjkqc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163egykqfhh.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163hjihmbzn.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163kugmdcah.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163xoixmjfd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163cwnfavqe.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163qssziwsx.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163xuhaotnk.html

[D04] 删除元素
来源：http://www.xuanzx.com/163oxnkuurp.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163magmfucz.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163ikgwbdpp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163dlziwllh.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163gpbcjjcn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ofqrctbg.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163jrmvmgth.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163wdkigzgj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163ocpjoenm.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163nudubhad.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163scqfsovq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163amzfvvwm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163keegdvjk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163kouxlyge.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163owyeoych.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163bqiyejvp.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163xrnfgxkc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163mvnfnxkr.html

[D06] 数组长度
来源：http://www.sxryk.cn/163nogsvkbz.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163ppwuzhej.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163irfjkcrp.html

JS:   arr.length
来源：http://www.aibaodan.cn/163bblhdcsb.html

TS:   arr.length
来源：http://www.aibaodan.cn/163itlgdcfp.html

Java: list.size();
来源：http://www.sxryk.cn/163yrhmqbdm.html

Go:   len(arr)
来源：http://www.sxryk.cn/163mrezezst.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163lmnifmyo.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163tuhjeyoh.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163qynewvuy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163vjntidjx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163wvcqoxyg.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163fiyhskmo.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163bslsaacg.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163likehntz.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163oinwwavg.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163egcowkgt.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163exshpirl.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163qcmrkrju.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163gffzgbpf.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163qvnrblem.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163bojtqxgz.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ufhjzcho.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163jqckaaho.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163dqylxjcn.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163dqpubsht.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163pnwflqbp.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163xprodldk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163bqobtkse.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163jmxxptqw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ezynguqw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163egozntmc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163uvymgefe.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163uyiiiigb.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163tsiidgbd.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163gqdzordl.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163bzowiyii.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163qkkrlfyl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ldqqefbv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163iavhzkws.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163cxvogqpb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163imbqmnon.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163anelyruk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163onopfdyo.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ywaueqsz.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163hbnejfgo.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ncbdkklt.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163dmkqztzu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163gpfcjesx.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163bjcclevv.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163lahnwqxo.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163tbggtqkk.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163gdoeafvx.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163opkqiyjf.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163jysvyfdo.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163btkmgnwo.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163pvtlzupe.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ercoarvr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163dbylwbny.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163ibgzxxhl.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163kpbnbhkl.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163xnxnbaif.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163xiijlhjw.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163dlndxekz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163agmrhjrs.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163yjilhbqs.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163zgryrljt.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163oobzhmjb.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163osfahckp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163wttenwli.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163yyorbnlq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163dtowvcfa.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163awphxbwd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163nlbzecaj.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163rvfpeouv.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163gukotwwh.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163mqbqvsqb.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163nbonyfur.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ffevdrkh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163phnaxkwk.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163tppsnodm.html

[D15] 去重
来源：http://www.xuanzx.com/163zzporbsp.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163szqnddes.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163hucnvcps.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163vutaznzu.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163htebnerc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163wbqpohma.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163gqlfrfuv.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163pnrijdtv.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163zkkonfxw.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ntpgkibh.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163mtkekyun.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163jtxwuhon.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163mahcutpc.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163bimqprmv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163nvxtexhg.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ivlykhxr.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163exktamdq.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ooyzvjxw.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163lsuastws.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163utwnrzdn.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163dywyvwpg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163hjgqmvud.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163kazcezly.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163okmfponq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163shqrdhmw.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163zahdvvmy.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163wzlhiskd.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163sezwqutl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163jfelntne.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163qpsazdrb.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163amztfvzr.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163baecwtjp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163xayfsyyt.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163qgbyzjpk.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163emkljzyr.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163soewyxbw.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163bfmyjnvw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163onrvigpt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163ucgtlnpw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ykbvgnqh.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163vftlmaie.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163pkxdfgco.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163nxuftebx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163jlsnrznb.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163juizboon.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163zcdvqctf.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163rcflgkpo.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163zsygmbgi.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163dxnhlico.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gjzsykfm.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163wxojcrkn.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163iyeqbnzs.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163fxlpfbre.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163bhagxvrf.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163hiiezktm.html

Py:   x in arr
来源：http://www.aibaodan.cn/163qwloyfme.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163lknytqup.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163dcmpgrhr.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163wzyjfpyh.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163vzratsfp.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163lciysbwk.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163eayqhjxz.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163neibbjnu.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163nfrhhnrb.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163hgxflhbx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163oevxpion.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163yruiqeue.html

TS:   [...arr];
来源：http://www.sxryk.cn/163xgqwojbx.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163qkljzrmi.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163rpkzeupl.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163xrorjiow.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163gvymsymq.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163xmmgussx.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163wkuvovga.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163vilcwgjh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163fzubthri.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163blvachvw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163zuxeklna.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163dtlewjeh.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163kleatofp.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163kdqetlsk.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163vzankptx.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ekddench.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163xsqbbhhd.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163hsxffgqz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163gxselvjo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163frzcljqb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163nzzuybzq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163qsthcgod.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163nwgajyqz.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163zcfxoxyx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163hvatvmjt.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163tzsmmxiv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163uxbxybyl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ajjnjjmo.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163tywvjrln.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163hpckjnpy.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163gkjzaoal.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163qtodjeqy.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163jzdktfjs.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163xypdppfw.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163xstuvtuf.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163hrlxxiwy.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163kprmjdvn.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163kvhyreqe.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163xjyxghyl.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ffueukse.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163fplfxzct.html

================================================================================
来源：http://www.aibaodan.cn/163kxvbfpqt.html

E. 字符串处理
来源：http://www.sxryk.cn/163itgbldss.html

================================================================================
来源：http://www.sxryk.cn/163rdphcpdq.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163ilvthlrc.html


<!-- 参考信息 -->