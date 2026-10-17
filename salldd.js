外链999!wailian999！

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163wwakonrt.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163hrhhwffp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163zbzmwlms.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163fxghknrs.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163qpireutq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163nvgvxokx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163tjfcxcho.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163tuwdwqoo.html

TS:   同 JS
来源：http://www.xuanzx.com/163vixgrlks.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163kfzxdayb.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163qgreabdl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163elormosd.html

C#:   块级作用域
来源：http://www.sxryk.cn/163lvepstig.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163smbryrjt.html

Py:   from module import func
来源：http://www.sxryk.cn/163rkjodwpd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163ntedftyp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163cosktqpe.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163rkcazkga.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163lewvwsfh.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163uxqbrjhc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163kyyxrvmx.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163cjkiohwb.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163msmfftky.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163gmiezffk.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163hnkttelo.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163dikvjyrs.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163mkhjardg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163xzpqyseq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163rdouoimv.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163tfbpeztv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163vuitkyly.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163qdhhqymp.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163vntvbrso.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163pqdgpohm.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163hsrgkcdc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163csikvwph.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kwggvzuk.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163bxdpoowg.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163qzazymuy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163esymtelk.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163qgzeidbj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163psztplwc.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163djhbbpgc.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163jecioigl.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163slrssmxg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163nqeflhym.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163rrwzlfro.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163bvfptcit.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163odusemwe.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163jpjrczmt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163oqsiluyv.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163vflewlny.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163qzpqmbue.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163gjtvlvup.html

Java: // 无解构
来源：http://www.xuanzx.com/163ddpjkyuy.html

Go:   // 无解构
来源：http://www.xuanzx.com/163indoifmm.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163icifxopv.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163cqxifvhm.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163lxojnmda.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163cblikryb.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163pfiiqepo.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163tfhahvej.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163elgjewzv.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163kwtrlncf.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163ixprtakt.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163utymoqoy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163nbhozxot.html

================================================================================
来源：http://www.aibaodan.cn/163nrwzgirs.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163gfwgcypw.html

================================================================================
来源：http://www.xuanzx.com/163cfyspmue.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163nfcfpfwh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163aallhiew.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163snyptwme.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163qalhhnul.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163jkuvwbht.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163mnbeyjxw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163dwanqitc.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ltzhvpcg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163meowmxvs.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163txbammki.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163vyqwucrf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163xyjjynva.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163feotvmcr.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163jvdkloht.html

Java: list.add(4);
来源：http://www.sxryk.cn/163zoarcdfq.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163jszjiell.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163qyqchnpm.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163bdlhxsrq.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163mqdxtgdb.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163kfufxrva.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163jeqovygr.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163wacslgce.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163zmnfmzev.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163mxzcnahl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163guurouup.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163xzxvrvck.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163bscqrwkl.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ulftsmxr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163hmwthyxg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163uerntrwf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163qyofrjmn.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163acxnxyim.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163khvvjxoe.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163rjpxhait.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163tuuidxil.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163uyrcecvl.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163agmvscwl.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ujmmbrym.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163icoimiui.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163yfbhnpmb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163vlybehcl.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163stmtvgma.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163pbnyovqy.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163jzwswoer.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163mpnfefuo.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163dnpcctvh.html

Py:   len(arr)
来源：http://www.xuanzx.com/163fgvtvxhp.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163tlpopxev.html

JS:   arr.length
来源：http://www.xuanzx.com/163hjqwqtlk.html

TS:   arr.length
来源：http://www.aibaodan.cn/163bdmojwyv.html

Java: list.size();
来源：http://www.sxryk.cn/163syspghqn.html

Go:   len(arr)
来源：http://www.sxryk.cn/163qdceqbcs.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163yqugzfxk.html

C#:   list.Count;
来源：http://www.xuanzx.com/163wddgsvqh.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ixbhudby.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ixikjvdb.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163lrtpcmkx.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163zvlmvzvr.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163pjymfopu.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163ctidupln.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163lpkrmffh.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163zcitmovg.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163kjbxcizs.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163fotipnce.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163wgnolxum.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163tgeoxokz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163movagatk.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163bkiizues.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ckpcbvao.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163gmesojsq.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163nwvjkcsw.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163xsxcylpw.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163yivwankt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ytdxvkkm.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163jzgssijt.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ptzjkfrm.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163ubhhwtwk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163rxjguily.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163thtuaacv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163qwczvohz.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ezjvnjtm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163lvoolvzi.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163xoepgeoj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163okcesiwr.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163xbjodxqx.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163lubmgwki.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163oumpnifv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163fgynspoj.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163lmacjqps.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ezyyzlbr.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163acumtsjy.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ilpzusee.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ybfeybnt.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163bkjzxjbn.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163vgwfvxpi.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163cfudxtar.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163neeqztsu.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163psmhsrrl.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163rdjwgcwq.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ggjgonjv.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163tohepasi.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163exppdmvp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xpomsoiw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163vcbyjnpe.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163xljivjmz.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163nlmxfepg.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163lwtzjhnm.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163jpitqkqi.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163wrrdqscv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163odtwxfgb.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ylbhbhwe.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163sjzutjqs.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163hivysxga.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ilapyeqf.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163ilozinhc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163mlhfiwca.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163wgzgikqj.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163urczuvba.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163xbzxuucb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163rfkqihfc.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163dyqjzqdc.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163xdwbandq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163ftxgshah.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163mqdujhtj.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163pyeoquih.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163comhkepf.html

[D15] 去重
来源：http://www.sxryk.cn/163ivjsbedz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163olsgieuo.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163tzdtwrcn.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163djbqkmkd.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163vqvqunxl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163pgyddkxx.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163epdvuywl.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163vpnbbgth.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163pecbigzq.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163sdwnjiko.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163tyleccif.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ldvhkqse.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163iisheuax.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163bkcemyna.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163jisemgcq.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163jcqklcrp.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ynugelkj.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163nzlwyalb.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163sysjobig.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163kmqfzncx.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163atwirizj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163skyfxoqu.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163urglxtni.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163sunlbbqy.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163lgwsubdf.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163lhqumqkm.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163svygegms.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163octvohfj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163hiajytat.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163ggimxtoi.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163mifnylqs.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163vwwklwlb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163rnsjeheo.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ilkkuknh.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163loegdfvb.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163uenzlrqo.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163lwwelctp.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163jfysobuh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163tqxdhktl.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163kerrmdjh.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163jigpvher.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163plldrwme.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163nxtebqoj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163cznsdmyr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163sinrqrfw.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163zidrcbkz.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163vsqzluni.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163axecwkbm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163wiknphne.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163eqdpdcce.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163qdajrewo.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163sopysnlb.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163jdnmfpto.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163csfggyvo.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163stiahiim.html

Py:   x in arr
来源：http://www.aibaodan.cn/163hpfqgtxi.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163sccdtdsc.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163mzgvfnde.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163wutmasvf.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163bsjqvfpm.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163xkqqrnon.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163yoxehjar.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163cmgavbup.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163vemasmbr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163rljydzxd.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163addtgxea.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ovwyosxz.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163adacazsa.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163wxyoyurg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163xsaxuoho.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163pcaiwibg.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163prdmzjqt.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163rpomxhlx.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163xsqdqrep.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163hjzkaknu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163jxfoqnmc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163bpesjsaj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163yczbhsqu.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163tyxrfumy.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163yauimppz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163toglfoyg.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163tzaippas.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163qzmeojaa.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163tgytkrfz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163nfdwucsw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163qyafallt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ysnelepl.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163tyuqubmk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163gzreqtaa.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163bvefmkao.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163qeeogjyb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163vozaxgwy.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163vpqiqywy.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163fxcqcdai.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ycmyfclo.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163yagfzkao.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163zachkjbj.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163ufigwlck.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163apkesebc.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163kbdmpciv.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163zysrgwjc.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ashvlwee.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163gewsgogp.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163vlmobyph.html


<!-- 参考信息 -->