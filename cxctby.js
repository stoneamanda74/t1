外链999!wailian999！

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163wkmnxwnb.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163wompxfpq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163weucsobe.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163gfqbasxj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163zlzspkot.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163ozpjynde.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163urxtdclo.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163qbogdhbl.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163gcgvnsnr.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163thkokqui.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163txwkhfck.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163kzwelzkj.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ewlnmtdq.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163dexqagks.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163ixdgtqzf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ylisqznq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163crrcyvqx.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163gqjkutwl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163izdkhhti.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163ijaaoygr.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ertsusmt.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163srloqdix.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163tskxbxxz.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163zgkmbxeb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163cgtmefgb.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163byrizcza.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163nfjkdyji.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ufuvbdxr.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163eavfztlh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163bqmhiyur.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163zzurhvlm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163hkmdgvet.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ieueuyox.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163biicslad.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163losppzoo.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163xplchjhe.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163rukprclb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ojytgmqv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163xznqltii.html

[D06] 数组长度
来源：http://www.xuanzx.com/163cwjpajkt.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163yhrgliya.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163uvzzbvpo.html

JS:   arr.length
来源：http://www.xuanzx.com/163cnyvcnuz.html

TS:   arr.length
来源：http://www.aibaodan.cn/163agzixysy.html

Java: list.size();
来源：http://www.aibaodan.cn/163boxrkidl.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163memtmsud.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163mcawrnik.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163iyjwrrcy.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163kkjcrcud.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163zogfssuo.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163tbamteog.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163tchomahf.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ufuovzsh.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163zzdvdctx.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163osbqosde.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163cqjldbkf.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163nzhxohod.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163qknablma.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163qptliaiz.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163rjrtriag.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163gwjevxfa.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163xdncsvww.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163svetbttf.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163dtigsizb.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163jqpecnag.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163weacfyia.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163asfuteyh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163kjcyvnwd.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163omuqoegt.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ffnkoyge.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163hhkhobzf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ihtznqji.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ksmelogd.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163qijwdjvj.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163ncdzxcfw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163mxparwhk.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163cacxqhed.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163yjlkhamv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ogbheisw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163laizvrcu.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ptmoulas.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163lwfgkkzt.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163bzgwnnnf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ephfpjfz.html

[D11] 反转数组
来源：http://www.xuanzx.com/163lifsrlzz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163cyegsdkn.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163fwdzlxia.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163kezrjzmh.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163rdojfqyr.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163xfjxjfhe.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163smipgxof.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163szofjvox.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163wvgbbxni.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163kypjmpdb.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163yeydwyzz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163dzmptgry.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163hzmaktnf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163wbqturrc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163papqqzsm.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163titintst.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163tyynfjvd.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163fkbphmsx.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163leavbxxu.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163wtqecsvr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163wdfyyykm.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ifkglrdx.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163znyfrrbh.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163xqiratmw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163plgsohih.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163kqcdbrqh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163epylqcyz.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163vrysdrjt.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163hxkrxanh.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163uungbzrc.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ulaeluwq.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163gcgifdhq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163eiheivze.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163akzgckfs.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163njrwhtrk.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ayfitgki.html

[D15] 去重
来源：http://www.sxryk.cn/163zpcmqqzq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163xtsyennv.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ndfrlhue.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163dslyngvp.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163vcgrabwr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163bwiigwzh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163dywoyver.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163feuuxeyt.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163rtuuvdgt.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163fwgzzkzd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163nzzjwfam.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ylbojqnk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ruwszxdf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163hytbcxkq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163wayymeza.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163qerrloas.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163npvsodos.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163zpzqfihm.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163zsulnjys.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163klbopolb.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163vsbfdwcb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163bolothnx.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163tiztfapg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ambfggzl.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163eggyfelc.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163vrzebqlw.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163cvigjgij.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163zjmlrqld.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163jadkztbd.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163oahklotp.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163xvokzgpr.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ndxujyav.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163abioytnp.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163mlenjcbg.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163llmozjln.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163baubuylj.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163wsjyjwkm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163zjatwpvl.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163wyzgwrwq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163clmrvflx.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163rtejqjcz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163uphmvmdn.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163xnuvqsnd.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163gxzzfkce.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163vuoqlczk.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163rmkabtps.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163stfkbxuw.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163hpattvqh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163nfcuqqof.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163xpcxcnck.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163uemjeunw.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163mijkhvnu.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163dgpogkbb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163amnteyio.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163kxupeopd.html

Py:   x in arr
来源：http://www.sxryk.cn/163dbkpgctz.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163bljbuaop.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163lgvmkwqm.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163iypppike.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163eofgshzu.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163uamyhoxc.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163ypnlzxch.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163vmlfjtcw.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163tcchnfyt.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163iembgacl.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163nzppffdt.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163wmnjgurg.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163yfixxukr.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163nsztmwlt.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163vxsyjiwa.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163rijjlzux.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163mwtmubdr.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163lcwdlwmh.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163ipdmycud.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163wevqjdzf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163qmryilwp.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163sunyuvgn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163bnfffdjz.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163pogivtnn.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163utktcith.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163umnwcalu.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163dsytogly.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163wpdlnzei.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163gbigxcgf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163vpjfyjif.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163egfgtnes.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163lxdcfvfb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163hdxsulde.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163pqeqmqao.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163rgfbpqjc.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163betumpzz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163zbiruuck.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163rtxgjhao.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ucxkuktd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ueuhgbrp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ueuxsvzt.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163iwuvuufz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163sppkpgts.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163egxdnxdf.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163cwwunppx.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163vdvzjvvf.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163fsnkuwbr.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163fahsudia.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163psaichba.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163lzyllyam.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163mhqoxehh.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163wnmjzivr.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163xefpraqi.html

================================================================================
来源：http://www.aibaodan.cn/163apbkyezf.html

E. 字符串处理
来源：http://www.sxryk.cn/163wqlgitxy.html

================================================================================
来源：http://www.aibaodan.cn/163faxbonsf.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163umjnvetp.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163nlhbnhvp.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163emcffkxt.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163potjgjyp.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jdfvkadb.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163iyxeuxdk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163raxasdkw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163dmkkvjhp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163doqptekf.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163zbrlilrk.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163fbhfpwcc.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163uhlkemng.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163mrxohbik.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163zbblpqas.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163lgjlrtca.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163nwmknqmn.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163oxnkshiq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163tfehahsi.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163temwhwkm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ltampjsr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163akhvoexm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163fxevywfx.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163sbluopbk.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163pbljuwfe.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163szvsgvss.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163kgbmgbhl.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163fzpqadxd.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163mmxyynwb.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163gqeqpopi.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163stvabcnc.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163tortsfmf.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163lrqrusdp.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163lrocwrie.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163fnaumtzv.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163kuggmxqf.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163gxvzexzf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163hzxjiixp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163zgxhqilr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163uviengkb.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ivyihylw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163wawdmvez.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163tfrzqkpr.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ychylhjm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163ttrdxkrb.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163yomsuhzl.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ylywdajx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163hahsqwpo.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163pkxxkzfm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163yhrrmwhk.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163snomqrxu.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fvfhftdm.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163pqmrxsue.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163cksnkgik.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163vgdwdmmm.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163nxwbrrhe.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163tqxzgujf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163mjolztje.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163tcwzwzut.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163owtvbugm.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163allwwajm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ogxxlcdb.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163tkazcegj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163yxxuphbn.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163mumhvfye.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163lxjrmclw.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163cvdmdasz.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163gtscufgd.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163fwtuzzhx.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163arzthyju.html


<!-- 参考信息 -->