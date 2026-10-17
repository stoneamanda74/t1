外链999!wailian999！

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163izhxdvoh.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163zzdkgrkz.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163xuagsjvm.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163jslghals.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163wkxmfvyu.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163itrptlfe.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163xbgxhotp.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163wprhzzyi.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163wmyjswny.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163wxbxuniv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163acmnbqjm.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163gdxzgjug.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163mazxpcba.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ifhxvomx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163geegjkgt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163sqppkttp.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163oehgaaqu.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163hgvnqmsd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163eqzqjdge.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163kwccmzdg.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163rnxlznro.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163aiayfvio.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163iajxrnko.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163jpsgewtw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163airnwvrm.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163ttwtbaba.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163unpmfyvv.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163zygffarb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163lqfjcwyi.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163iyepmwte.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163kqlkzszb.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163qurdztoy.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163xcrfctjk.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163agkdfdkb.html

Java: // 无解构
来源：http://www.aibaodan.cn/163oazeunya.html

Go:   // 无解构
来源：http://www.xuanzx.com/163nnwpjuea.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163fcjqvfdt.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163gqgcbcyb.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163nicfopea.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163dgpraisc.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163irddeklm.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163psadeokd.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163opjeuadb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163jibfmkno.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163abbtrqbi.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163hafvfhll.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163hokleqja.html

================================================================================
来源：http://www.sxryk.cn/163njjvyvcz.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163msgkhkgv.html

================================================================================
来源：http://www.xuanzx.com/163sjzpwwee.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163imwwlubg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163fjetvjdb.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163dbfgwoed.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163fgmsdaxp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163svrhicvw.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163qusxzrgc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163warjlqdn.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ypluztll.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163etdnuicz.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163sxqafhjd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163giodcddv.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163qjownpqw.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163nautszsy.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163wwewganj.html

Java: list.add(4);
来源：http://www.sxryk.cn/163ajjnhtxq.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163uaapgvmc.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163igockysq.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163qylgvfps.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163qagveekd.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163vfmobbry.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ljgamapt.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163bsfvtwft.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163lnzxydwg.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163cmzpqdtn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163shohlkwo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163gqgbpbhk.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163mpcbgedv.html

[D04] 删除元素
来源：http://www.sxryk.cn/163wfbfrqvf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163cqjvlzkr.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163ykxjqpwu.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163jonekqwh.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163xmbresyf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163vdokesqr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163jqlfgadp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163lfsugvvi.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ceklvqug.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163xfpkyivb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163xikiyptz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163sjhnrxif.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163vyrmyjpo.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163qthqsmgj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163yexpzyyr.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163azykttug.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163wczhkprm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163uepgldcl.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163daftyxpx.html

Py:   len(arr)
来源：http://www.sxryk.cn/163dewmrbcg.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163bioyqbej.html

JS:   arr.length
来源：http://www.xuanzx.com/163jpkdsbro.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ebwmbkeu.html

Java: list.size();
来源：http://www.aibaodan.cn/163bxhokjlp.html

Go:   len(arr)
来源：http://www.xuanzx.com/163ofuhojtb.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163fddzfhfa.html

C#:   list.Count;
来源：http://www.xuanzx.com/163osqeqmja.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163zlpgtxmu.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163svgcevjp.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163lsfspgbd.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163tedbwlkn.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163tfjcwnls.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163axjnqnwi.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163tmplmlxb.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163fcgxlyyh.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163onwguozk.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163pizotycu.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ocuaytje.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163goqkcgeb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163advorvtz.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163xgdmrfqh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163cphcojjr.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163jlmoxxgr.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163rhwzrnrm.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163torcmfmu.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163vthbummj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vuamdoaj.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163fedbtmth.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ayhtqfqa.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163eqtaxdne.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163lzauhzwi.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163snlstsln.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ewvpusjq.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163kfjkmdud.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163niisiscx.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ykzhduyh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163smshzxow.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163sjpubvvx.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163liqqoaaf.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163xkbfchxx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163hhwyrklt.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163jqjukfhu.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163tnwitins.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163bgfnwvxe.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163tybsbkij.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163yghqpgiz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163bwemxgec.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ldkuoonn.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163oudxycio.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163fucpbkfj.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163peoigkcy.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ahakqtwa.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163dgofgfpg.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163mvysnjde.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163ndyzztgs.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163kbnrdpvz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ppvkzhxv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163lrpwzghh.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163aketjnch.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163cdnkuwom.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163gpmpnstv.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163ldslazrg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163dogudjyt.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163rmfoccth.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163yjpigrmf.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163hisaejfp.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163phxmzdwi.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163znwwrzja.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163eozacxca.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163kutwhdml.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163ooaomrzh.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163ghijbebu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163svevmqlb.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ijfcodye.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163rgzgghte.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163sfnxqbvv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163exbdqtjj.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163bohasqnm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163tzbozjqn.html

[D15] 去重
来源：http://www.xuanzx.com/163okitkfph.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163tpoqrdgg.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163lbuwcuok.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163hdkwiodw.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ysxnxlfs.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163saprwzdg.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163rmijqkgq.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163urmflqab.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163tuuslzls.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163gwtoacel.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163fyncuvva.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163ccilbwgy.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ylvauexf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163yqyqwlwf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163faimncia.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163lcfwdecc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163prpxcznx.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163wuglyhud.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163hcvyfken.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163qostcpyw.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ravxklne.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ajsgcnhr.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ercszxaw.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ibimildl.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163jalvpgja.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163cxcgrktz.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163qahsyszh.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163qmkziftm.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163xoeczyze.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163gpmanogy.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163uidutyxa.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ktuawvlb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163sjefvwsi.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163dxnagveh.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163adgqocvw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163peiowfjo.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163pnzsornh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163mvonikef.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163rpvbcsii.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163crafiuda.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163hyzzzrxc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ksyiwuew.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163hnikbkjw.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163biakxzrf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ilejcyce.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ivbmfsfy.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163cfnouwdv.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163anfliwen.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ztsjhytp.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163eqgxfqjb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163phvkcbog.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163fsaeieea.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163sdygsoby.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163qjospjoq.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163mkrwmiqw.html

Py:   x in arr
来源：http://www.sxryk.cn/163nwydhkwe.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163iqmeqnne.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163dbjmgmwf.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163dyttpwfd.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163kxmgzurj.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163grppskcj.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163cbmhlhms.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163lypsfdgf.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163wmnizpue.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163lkzkvwwv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163dduthson.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163wkzttfda.html

TS:   [...arr];
来源：http://www.xuanzx.com/163qcgjuxru.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163oadpqetq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ddxlbmgz.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163opqtwxhm.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163xaelxrvb.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ijaybmvv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163pldjencb.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163zcnogiac.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163yxaehhvf.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163btikgfxf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163blqlqhfs.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163lgjvnxdt.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ppuwiiuy.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163nujrchrg.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163skgobqxe.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163itfmqqpl.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163wfnkpfoa.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163qvtfjadx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163qqvjqdnx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163nntytavv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163fnwwgles.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163vijkdztm.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163eytkcooo.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163syabsxat.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163oocxrzuy.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163hwnkmpnj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163vvcqlvkz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163fezcmwju.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163xjzifbad.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163qokciohq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163ymwknvbu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163eefzhedl.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163nqqbgnbo.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163wdwpelie.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163chiicedr.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163xdvwlhnw.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ktauhrvb.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ahwefqcm.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163maqwvgwj.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ufaaxblc.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163pxvpkzrj.html

================================================================================
来源：http://www.aibaodan.cn/163onldraki.html

E. 字符串处理
来源：http://www.xuanzx.com/163jvqkddpr.html

================================================================================
来源：http://www.sxryk.cn/163imbcnjba.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163vjnojqfe.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163tvcnicxz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ycatwgas.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xkxobghh.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163clzqksyb.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163kshtocix.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163qpqmseup.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163ukfbnzqq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163rlssuzck.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163yhsqcqgz.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163waihnctr.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163hgeeuiek.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163jqyaywbs.html


<!-- 参考信息 -->