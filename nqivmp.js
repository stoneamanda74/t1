外链999!wailian999！

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163xjcmaxno.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163qelxnyvn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163fybqlnnj.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163vtfpkkrg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163rpksthnm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163adjqzlsz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ftozwiqy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163idjovzah.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163nwlsvotd.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163shrjshgr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163bljauvfn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163lnqajvkb.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163dupvmyzh.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163dyvtxvbx.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163knccmpvs.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163sbfrxgdl.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163xsiczthf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163bdktuosl.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163xyqpexzp.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163hgopqtab.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163nbpurnsx.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163lhyqtphh.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163xenuamsi.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163mczbgdgg.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163biompfkm.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163doqiyhsp.html

Java: // 无解构
来源：http://www.aibaodan.cn/163izzazcxl.html

Go:   // 无解构
来源：http://www.sxryk.cn/163tsdovijx.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163hekdvwwj.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163vwscexqr.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163cahscpeh.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163dvenxlee.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163eyeiqbxk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163crhsvijo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163fhraluqw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163cfllhaxj.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163xgnubbsi.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ecumplgq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ssxpfvra.html

================================================================================
来源：http://www.aibaodan.cn/163gudyuvfd.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163egvdyyez.html

================================================================================
来源：http://www.sxryk.cn/163mkcpvmya.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163kvyhxsas.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ztrudqbu.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163fkcegdwa.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163syexyblm.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163kcjctmud.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163xwmjbmjr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163gdlkuhyg.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ayvgcubw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ucinwahv.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163arktmuzq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163cduosuef.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163vosffjqc.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163trxyitrq.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163jdcvccnk.html

Java: list.add(4);
来源：http://www.xuanzx.com/163loxkgkfr.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163bjrivsdu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163vcfupsfa.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163cppvwjai.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163wfsvhkxb.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163svicbnfv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163wlmfuqbw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163fjylpkdf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163kjwtaqyh.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ahfageky.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163locznzut.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163myzoapkw.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163eshgzsoz.html

[D04] 删除元素
来源：http://www.sxryk.cn/163xuvzhqip.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163aqcfomjv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163gfkqrnvn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163metjhiny.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163fphvgtxi.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163lflqdurc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163lhxpzaut.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ccixyoew.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163nlmeeopi.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163znmtcmcx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163gmflcibk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163sjftbcvu.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163otjufhvc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163blbityob.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163dfcugzmq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163nwirxotu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163vmpzwwxy.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ipjrdfru.html

[D06] 数组长度
来源：http://www.sxryk.cn/163mfxllisq.html

Py:   len(arr)
来源：http://www.xuanzx.com/163azajiodr.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163uplclaoq.html

JS:   arr.length
来源：http://www.aibaodan.cn/163bbadqpru.html

TS:   arr.length
来源：http://www.sxryk.cn/163toaixzcv.html

Java: list.size();
来源：http://www.aibaodan.cn/163hleiwfxw.html

Go:   len(arr)
来源：http://www.sxryk.cn/163qxrxpxfa.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163xlwqkley.html

C#:   list.Count;
来源：http://www.xuanzx.com/163vwcoekmp.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163otimehlc.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163gynypdka.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163dsvjwffd.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163byvbkksq.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163pjhlvavx.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163wrqlyxht.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163jyceeyxq.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163aatcnjju.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163uirqbfve.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163nhvcyldi.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163rvfkhpkz.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163zwrpkjsm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163wouvoxrf.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ihtvrziu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163anfwsywd.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163gayjvssa.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163fuswdior.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163mcvpmtig.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163jciwcrmp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163qbxvianv.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163hmsvrnxo.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163jkzdlibt.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163vungvkjx.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163zcuxeqec.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163zphsynnp.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163vygmavdr.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163dudfxdjy.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163rxaojpkh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163gohrtiag.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163wrskplnc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163xevvxajc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163xueswseh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163imkhjipx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163nzgpxkfr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163aszwuupz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163efiphkap.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163wclxmlga.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163eljuozow.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ufmkbwsp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163tuuieagd.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163nsjvuwhl.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163sugtozjv.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163mmhdfzfs.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163crsfghnk.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163irfzltcx.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163agtazabz.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163uuiehqkb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163kzzqsibo.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163mnglhaos.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163oeibpkqz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163pofvfdor.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163kqnlpzcn.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163vqfckxnx.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163fmqkjlgd.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163bywrmiea.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163kvmeyhan.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163odgyqjoh.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163dgtryagv.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163vuqlnwvn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163byazmcao.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163enahxkgg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163koeclhdo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163qewmphoq.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163ebwkosbw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163nhativui.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163osnkrbto.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163tvxvrjcj.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163glhzxdtb.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163nojoptuo.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163vggvclvt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163qklymifd.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163lizorwzs.html

[D15] 去重
来源：http://www.xuanzx.com/163vbqpftiz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163icjdnmfe.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163karfevjn.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163qpmjqehr.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163slqffrzf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163nsqkygkf.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163zmacihph.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163psjxbove.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163dmhrqoty.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163foaukmtx.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163exxojjai.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163dioudtpp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163sjkfgvkx.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163gjjqoork.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163prsmfdzc.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163bmvltbtm.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163byqgpefs.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163qarquxdd.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163gbqwqmbu.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163axrpdiko.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163hcpxvdtz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163bczsfjdb.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163itwvmvxz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163oycmoete.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163pcquapcg.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163veodrzlb.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ehvwkrmm.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163jvjainzz.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163qmthwfvu.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163zxzvnsag.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163gmcednxy.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163ymlzbbcg.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163qeqijvwp.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163txlvksmt.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163rvavtwbz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163zzbddonz.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163tntfhsdt.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163lzvnfric.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163qsjiygol.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163decbuyng.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ikhsfoyo.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163yfbdcqfn.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163sqmayjnf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163zjyyqjud.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163eaqadcbw.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163qyuuqrtg.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163wsqirtsk.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163dciwhgqk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163yktmuagi.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163pueylzil.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163knzfcyhm.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163opdrquai.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163xdvygxss.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163zkxnvamq.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163wgygbnms.html

Py:   x in arr
来源：http://www.sxryk.cn/163gwshdkdu.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163wruatiog.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163caetiwzg.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163zbnishtn.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163bnmukett.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163hnayzwqk.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163znetcusm.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163bmboorcd.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163qtugsdfv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163dfirhcoy.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163igpxhauo.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163irmmvudj.html

TS:   [...arr];
来源：http://www.sxryk.cn/163qbueqcpy.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163zzcxtelb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163hvtscemc.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163bzpaaeok.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163wkdujfsy.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163inihodim.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163hrxpbind.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163rxsxrrdo.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163bhaybvtz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163weuohary.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163wbdpfqso.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163tswovhfc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163bbaxxfnu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ggffhdkb.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163vpyxechn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163ikjdzxek.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163icvjjapo.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163atwshill.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163enufaame.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163oyidzswm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163hpvyllxd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163kgllcwua.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163zaptahzx.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163clurouwf.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163wqabfjrd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163rfkediij.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163hmubznfw.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163gqqumequ.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163eztmmppy.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163zeliqkag.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163gjwejxce.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163bvyafnaf.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163eozpubsg.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163iyegfmzi.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163tyovfnwd.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163sjeyieow.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163tmawkidf.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163kegxfrdp.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163tlqpoxvv.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163wmeikcrl.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163gsnmupwo.html

================================================================================
来源：http://www.xuanzx.com/163nqdwzsfo.html

E. 字符串处理
来源：http://www.aibaodan.cn/163rjciwyab.html

================================================================================
来源：http://www.aibaodan.cn/163gludbrcn.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ztfuxwgi.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163xeqnwarh.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163jpvwndmm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163wtyiwygq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163jkktazxm.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163rrkyzvyj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163dewmnffh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163kgzrutvg.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163paefmovl.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163tklkwewq.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ewseakor.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163ayavtzds.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163mqtvtqum.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163czuffadg.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163gbjxhggj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163hbxwbntb.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163imrsxdeq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163xfnyqgwk.html

[E03] 截取子串
来源：http://www.sxryk.cn/163afwicivi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163nulqrbnk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ejbiicwk.html


<!-- 参考信息 -->