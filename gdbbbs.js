外链999!wailian999！

TS:   同 JS
来源：http://www.sxryk.cn/163talhgfpp.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163mspnocrs.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163jxgyogfd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163hvhvuxks.html

C#:   块级作用域
来源：http://www.xuanzx.com/163tanlupgf.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163wqpzbucc.html

Py:   from module import func
来源：http://www.aibaodan.cn/163grppxnuu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163gvxxjycb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163rekbcgln.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163qkvyxdvp.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ursheipk.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163zooaltdp.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163fquzjyjr.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163lhrwvpls.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163polbbpwa.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163yymnuzuq.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ohrznmmz.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ldmpuzgt.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163fuwnsnjt.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163wpmzdoqp.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163bxzeknam.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163rpyjrfkd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163lacujtzl.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163seavahhm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163jhcmyloz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ktsmtjzw.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163vqchwzlr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163njqbepus.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lztoydyj.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163yikeqrev.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163anvzteqq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163glybeegh.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163meymmlim.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163eidrhhye.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163bkrfavln.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163lflldqlq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163wcnnoblk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163tbggtwws.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163vrftrgkz.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163tmqlxvrp.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163xwlujhhp.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163bxmfcyuw.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163khmwqama.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163pvvjjhfx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163pkmyyexe.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163repxtxcb.html

Java: // 无解构
来源：http://www.sxryk.cn/163sftpcazt.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163mtarhtma.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ytcbeveb.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163iiuloubb.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163bmrerroa.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163slittwmk.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163lqiarwgc.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ebpethxl.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163gjltzzve.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163tjppnuyp.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163gstvphff.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163qthrtkqm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163tfjuycdh.html

================================================================================
来源：http://www.sxryk.cn/163ahglaqlh.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163jekcocdh.html

================================================================================
来源：http://www.aibaodan.cn/163tgpjhvkm.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163nlhfpgfr.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163nsqlbamh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163ltfqchji.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163gwjnlooy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163snbtpqvo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163njcvukrc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163lbypbcnn.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ijybubkr.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163kxojgefs.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163dziccmty.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163skmnhzcb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163zfhsebzf.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163djtquzbr.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163maqqxwej.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163flngmutg.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163dwiyhnwk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163nqvohseg.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163fqkoxivz.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163cyrtykay.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163zyfnorvs.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163cffjecuk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163trlqzwyt.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163wndcgrol.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163wlfgfqgs.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163hmylumya.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163fgvcefvl.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163hlbkdvtg.html

[D04] 删除元素
来源：http://www.sxryk.cn/163kxpvxghh.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163dtldhksv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163yxviwylg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163yaduvofx.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163pntwfdms.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163djxjmovu.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163qnoyzqjx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163wgsjuiag.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163azonmvnx.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163mghgujzd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163veggrbpp.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163iwwrvcnn.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163liibnqbz.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163lpcdauht.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163clemgpjr.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163fmbidjmn.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163skhkdjlh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163cmmvabvh.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163gddrdkem.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163auqdqcda.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163osmjpgem.html

JS:   arr.length
来源：http://www.aibaodan.cn/163qxcqkxca.html

TS:   arr.length
来源：http://www.sxryk.cn/163kytggrmp.html

Java: list.size();
来源：http://www.aibaodan.cn/163yvkzohdd.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163puqfuakj.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163fhftjwux.html

C#:   list.Count;
来源：http://www.xuanzx.com/163tlyusqbk.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163iolmoldq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163turkccir.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163xwjcscut.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ygzrlswa.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163amjchcfh.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163dpgadyom.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163fyqdbxli.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163kzckozgk.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163reowmdwj.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163jshytwkb.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163cduszubb.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163viwruwio.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163ewhscskv.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163fgijgdyh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ozvcdwgj.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163cwtlujlc.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163jjeuddlq.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163hipwdsla.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163fmeejlxw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163abctxpjv.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163kauawadd.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163qptycngs.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163fsyjnfkb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163gjruedrs.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163xumjdfvp.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163jshmrjxx.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163enkwbwcu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163vuqaywjq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163scyowfny.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163xawoijal.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163oglvgfix.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163krlhplne.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163shvsuecg.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163rhpvalwk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163esgnbcqd.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163rpbspdjs.html

[D11] 反转数组
来源：http://www.xuanzx.com/163kppnddru.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163rnvhgpzz.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163nmmqwtia.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163saumnbce.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163minmbyag.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163revhaugn.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163uiumnnfv.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163pgzfhmdv.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163vxksudni.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163gaqwbqil.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163htmeybhr.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163pbffnutl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163aoaezfwl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163jfrzuqsy.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163dersbisq.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163shpqpjhc.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163frrzafgd.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163xgxdipij.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ohjyxmad.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163aighxmqz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163pgoytscy.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jveupheo.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163nkmdkqiw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163mcylflye.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163omzcvddv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163mmgjmsmt.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163twlsqqeq.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163mvuyjohj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163inazozwh.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163kisgfhgc.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163iiwxuwcm.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163bkscswic.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163nsgmhjpo.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163yebtwgap.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163nupziwub.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163gmyimswj.html

[D15] 去重
来源：http://www.sxryk.cn/163mdeedcfm.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163icftwwqs.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163xyuhyajj.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163bodcwyxy.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163axtttmzj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163iicjikdc.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163bewzaoib.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163edmnhgaa.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163xeudhebq.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163uhsuvvef.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163wysgyraj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163jmfnhxax.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163cvplfued.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163yylczrek.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163vttpxkxr.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163ffgfhyjh.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163nlquuovf.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163wbolpogw.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163njytipqz.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163muexlevq.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163xeproujh.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163hcispwph.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163qxyyjhub.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163btumbcsb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163eckzpcua.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163jtrrjxwx.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163cifzqvtx.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163obakzmqw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163fywhlblg.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163szigeift.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163kujorpyi.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163lghotyzc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163cmaddnru.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ujjnpddh.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163llkxyyvs.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163qghzeyeq.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163wqvaiwzo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163kguprise.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163fbagkvak.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163hmyxgvtd.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163lmfqgsin.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163lvfepmxo.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163mosdjbrx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163voewhbal.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163jpffolre.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163hlaljhdw.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163hojjpqoe.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163gndgyieh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163drxwwzkm.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163dbzuijfr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ffrdcsag.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ctxlxsdg.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163yvhqolwt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ooivzyil.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163jjcljtnm.html

Py:   x in arr
来源：http://www.aibaodan.cn/163cnomlajr.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163yhoazufn.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163wfejwqcz.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163wgajlvrf.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163mvqjlnjk.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163zosxrdnt.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163jxiggtfe.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163iwaakdst.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163nfbourqs.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163zrdcrkmg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163qmeiinez.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163flntlbyx.html

TS:   [...arr];
来源：http://www.xuanzx.com/163beugkzdn.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163utszivfq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163iojfesrt.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163lhpxkehj.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ckushqfy.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163vnsreome.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163zaozvkvy.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163zcajlcwp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163wibbokal.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163wsqonuyt.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163dfydmlqn.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163clrqjdbo.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163cuxxudre.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163eqzmodew.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ntfubzdp.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163jinfahql.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163xcqdbmtz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163uqhnpcsg.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163kkgseimv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163mzmagizc.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163zbonjixo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163bpmlufqz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163etsexjzl.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ripehlxp.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163odhuyddl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163wmbftkue.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163eptvfqda.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ffuwywhp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163sqocppkr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163qczjbgln.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163knbsnjiy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163nlxzexxd.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163kigclxzm.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ybyrwyty.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163lllnoymn.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163jeslkasr.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163iftbarvb.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163hljhssjy.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163pbirirca.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163imdbbkst.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163tpduerbj.html

================================================================================
来源：http://www.sxryk.cn/163zjdmuubw.html

E. 字符串处理
来源：http://www.sxryk.cn/163cnvlgjyr.html

================================================================================
来源：http://www.sxryk.cn/163stfujdlf.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163mhjhltik.html


<!-- 参考信息 -->