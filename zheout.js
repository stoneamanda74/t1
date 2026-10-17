外链999!wailian999！

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163qppnhjwh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ivdioumn.html

Java: // 无解构
来源：http://www.aibaodan.cn/163tbgryktz.html

Go:   // 无解构
来源：http://www.xuanzx.com/163pmfvqztj.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163omluhabi.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163wviznnbh.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163xwjklxyp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ieawrcog.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163upcfjesh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163jmubmxzt.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163qyyepcla.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163lekdxgbz.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163yulbirha.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163nzhwbvss.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163eiufeaue.html

================================================================================
来源：http://www.aibaodan.cn/163yitnajju.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ajophvew.html

================================================================================
来源：http://www.sxryk.cn/163rjmdrnna.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163oabvppob.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ttscxinp.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163zindceod.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163mqkbwkig.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163grgzvkic.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163guzboeyu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163cfphumwi.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163sykwoznt.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163vlylgbud.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163cxohuige.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163vqironyo.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163yctbaiwq.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163jfzwgzef.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163lmhnykyx.html

Java: list.add(4);
来源：http://www.xuanzx.com/163nqxtyxqi.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163dnelyjlp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163llpuwjil.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163ccggzyvi.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163qegglecg.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163nuefmyqq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163hfbudrjc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163jpxuumlv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163xnbpqocu.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163srmqxwxg.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163qtfrujfu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163kmzhghlk.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163hzqaeswa.html

[D04] 删除元素
来源：http://www.sxryk.cn/163cgxiphjq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163jsjpmmpe.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163alvdlfbs.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163mfffdqoc.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163tlhlvvhv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163puojlxuc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163vmuzomrg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163inawoxjp.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163lvvhnitz.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163nfksucph.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163mpbqpjie.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163vbdrcrtt.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163pccpeqjo.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163wbmxhbrr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163jotrazes.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163lwhzlstn.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163myvezrzt.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163bibrfobh.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163uoqsgkbk.html

Py:   len(arr)
来源：http://www.sxryk.cn/163jeihzfni.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163uoaghdwg.html

JS:   arr.length
来源：http://www.xuanzx.com/163gikxczfr.html

TS:   arr.length
来源：http://www.xuanzx.com/163mrbbmmip.html

Java: list.size();
来源：http://www.xuanzx.com/163ljzdnylo.html

Go:   len(arr)
来源：http://www.sxryk.cn/163tlpqmfgf.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163epuyvlpa.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163rnhqgdgh.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163blkheyuc.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163vnxksjhn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163lbzirduo.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163wdtysjku.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ypvklabj.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163wkhnylwh.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163jhvnliox.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163asfurnep.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163tthyldhg.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163rcicwsdm.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163ivosmohc.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163yzbdmqeq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163uvvtwbbg.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163bdiolvmu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163mafmwqta.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163arjasvhb.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163bcpiodgb.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163vsxxlppf.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ursjwjix.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qtdyrmrk.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ypeprdnr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163slownmit.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163smjchebt.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ojyfumts.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163nccmzjun.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163zfmzkgwy.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163xxwpysga.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163oloynfno.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ztjlhyca.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ojdrlfxn.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163vfxffqkn.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163unocnyxq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163wxrwywpy.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163zkexrmmm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163jxssyteh.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163tzpbjaqw.html

[D11] 反转数组
来源：http://www.sxryk.cn/163zyjwdwna.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163hvqyhqha.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163hqbxuxyu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163gixmqorv.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ppeutaud.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163kswcffsh.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ruhzholn.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163donczlnw.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163jhvkncvq.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163bedvujjp.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163mgnrbhdb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163eaospise.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163riosgiob.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163pfruvebh.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163lwxevlqk.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163uijctsvj.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163xocvxkxa.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163bmlbjdez.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ypdhlftv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163seakspzl.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ygevxemt.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163vykgypft.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163yymfmxsz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163wxokktex.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163pwgteewz.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163guefymjh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163joxpcqyw.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163ivdouygv.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163itpmgiqm.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163dwisnxjm.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163duhpajcq.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163lxwoifmv.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163kseihwao.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163kuejphtx.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163veqjbskk.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163eyfkgybd.html

[D15] 去重
来源：http://www.sxryk.cn/163usfmenyn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163gyvrfseq.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163uvzlarsv.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163vtbdwscr.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163zbmakiqk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163zohnnokj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163pmanyxqz.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163mqrvrjss.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163hlzwprjc.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163rggnvzfv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163xfdjwdsa.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163vsuzikuf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163uwdsmbwc.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163lzxskhqe.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163uilxkqcc.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163fckfzhxq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163aaclppfg.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163vvidifts.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163fcndyuoj.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163howtvgdd.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163gaqlrzks.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163eowxxocv.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163exarphuw.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163sqxclhoe.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163dnsbhrxi.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163zykemiij.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163pfjhvjpd.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163kfeggwea.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163bevrtdov.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163htjxlkxv.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163zgzzukbg.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ipgrnkra.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163becqnusp.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163pzqsotbi.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163qbssjmlg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163iphhtkvw.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ciqtwvbt.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163yjjcfxwz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163rcezyhgq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163gdkwxefe.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163wglnluyp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163dcxkxrdt.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ytchoeub.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163habzqvpi.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163qmdovktp.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163hjnkpblo.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163pqntljbh.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163oxipwpev.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163vtzhghmg.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163hzmcjdwa.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163kzbagzcp.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163njvebvka.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163clsctfqf.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163jsnmynhv.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163gjngmstg.html

Py:   x in arr
来源：http://www.xuanzx.com/163mrayoitw.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163jnuxdpuv.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163jlrpejdh.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163ifrqcdyd.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163hiqofepk.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163xvvwnxmz.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163fqsacnrz.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163xzailhfr.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163cmiqhebo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ljnoypwh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163ebiyohpy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163kvdtxkcz.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163pnlvtmwr.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163vffzwdih.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163xdlnuqhe.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ekcqrfmp.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163zmwnnbda.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163kxayydwd.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163sanybihg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163sazfnnby.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163jgepvzcm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163fgqwbuhw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163cmskzvpr.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163vlaoubkg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163vwcvcfde.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163ybnqzyvh.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163rmnkeoaa.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163pyjiorfe.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163uxjkumja.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163yfyhcujr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163jtigtdko.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163bhunstma.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163vjceecuh.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163cznjyaki.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163jgezqszw.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163pyquscsi.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163rysuwfsg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163fzgubeeu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163xvhzjjfn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163piiqyqrj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163xmxgozkh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163wxtlqnfi.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163jjrovyar.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163fktthmom.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163mtzsevit.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163imslynlt.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ouivcmag.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163prjvnqnh.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163wtskrloa.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163fuxympmv.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163gcdyqjyo.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163knepgzax.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163lvdkotpb.html

================================================================================
来源：http://www.aibaodan.cn/163mkowxbse.html

E. 字符串处理
来源：http://www.xuanzx.com/163ynswhphd.html

================================================================================
来源：http://www.sxryk.cn/163vpqkuead.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163zqufrzjs.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163rhfumxkn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163orovucfg.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ggltcqkg.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163gqxuynif.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163qrtfhkid.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163eusexmnz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163gxengral.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163lvypxpsh.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163vxcnjaky.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163xanryfpa.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163gtdwvduh.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163pvvcxhjv.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163fotcnuln.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163yabeourp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163obtokbze.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163gvdashxc.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163rdlqlmgn.html

[E03] 截取子串
来源：http://www.xuanzx.com/163ytmoggwo.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163pdardzib.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163eprprgkn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163vphbrdgz.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163wvvwtbdo.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163mdexfirj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163lsushuni.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163wqbfcoap.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163cshkepck.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163xgvjkcan.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163dcuennvd.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163iadjgkap.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163sehnxrxl.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163rrunspvv.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163sbryjemq.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163otjbcsyb.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163sxofkcfw.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163xoraplll.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163dexndryh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163bcikrdam.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163uufbzuum.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163dmxyeqoi.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163gsippewd.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163xzlcpgzw.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163scaltbzg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163xcqxfeey.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163tqnoexah.html


<!-- 参考信息 -->