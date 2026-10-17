外链999!wailian999！

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163ccpgurwf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163cntxglti.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163hgwlkkwu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163lyaadfrg.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163zcsgdstx.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163chslscwa.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163vouwqsna.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163etxptjvf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163uofaujzw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163rsnxmops.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163dwnxbzhc.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163bpqekomy.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163fubrusjq.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163necpucpy.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ndftycxo.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163eciopvjc.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163yfjxbinm.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163mmfqvcna.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163zcmgdbal.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163okgvqrua.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163nsbbrvvt.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163qaailcns.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163iahbzweu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163qdpfhkhl.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163dsxpbyuo.html

[D04] 删除元素
来源：http://www.xuanzx.com/163npouwclr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163dtzkwxws.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163gsjlikrp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163pnwbbhew.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163oelateso.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163tighbvas.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163kghpktuv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163alumqvxb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163hnfhatjx.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163xmumsgal.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163wnvsyhow.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163horfqlti.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163qxkkdpaa.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163kvabjwsf.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163gyuvemuk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163fxehxfts.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163gyghuswh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163ahgtdvze.html

[D06] 数组长度
来源：http://www.sxryk.cn/163snlnamdl.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163lfoyocxb.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163oqzkossg.html

JS:   arr.length
来源：http://www.sxryk.cn/163zkleaocv.html

TS:   arr.length
来源：http://www.xuanzx.com/163loejrisx.html

Java: list.size();
来源：http://www.sxryk.cn/163qaiytwhz.html

Go:   len(arr)
来源：http://www.xuanzx.com/163ryivjuzb.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163qsariqmu.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163aibktzpb.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163lqeisrey.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163jjncqhwt.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163pvnrohjt.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163lumsfghj.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163eiuyluct.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163vafimljp.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163tebubmns.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163rmdkayer.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163wkrszpvd.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163stxvtjfq.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163kcevvirx.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163cbwuxwra.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163kgcezybd.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163yrlxqvco.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163bbwcgbdl.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163nutuxqut.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163zjxdojeq.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163xzncdytb.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163mhbtnpoc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163qepgncsc.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ixonlito.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163nobvhfhz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163bxvaurom.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163utogroat.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163qltztmqt.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163vrudsjpx.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163eywurjrc.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163xrrafutr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163xmboziut.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163jdchjwey.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163jctldbnq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163oaauincy.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163gfpbwwsb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163brcnkwol.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163vwmoefye.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163yahigrsf.html

[D11] 反转数组
来源：http://www.sxryk.cn/163abpzoaer.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163vuyflmbu.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163pawjplrw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163mmlkmssn.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163ywpxxzef.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163qmrfnmah.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163znswtere.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163tjeucumk.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163qluzghoc.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163yksjazwp.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163kxnopcpb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163uzkzbnqs.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ogpmrkrl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163fuldamzf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163hplvnkzz.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163woyhtyqb.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163zazvmkiv.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163yepxpyxb.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ctwtfffd.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163nwkybonb.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163jcrvudzg.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163pddseiuj.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163idouimvs.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163mcdsdufg.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163awoatqfq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163adkjohqh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163sdbdviqg.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163sjummzot.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163gudwjsgg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163rjuveopq.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ylgkbhtb.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vtsmvljc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163qjstfrhd.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163utpoyjrd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163zobcukzc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163zhinacbe.html

[D15] 去重
来源：http://www.sxryk.cn/163aalccnwx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163mubiqxji.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163qnmfuava.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163kjjrhdxb.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163qqrakakh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163zunpcqbb.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163tzualzfv.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163ijbynthv.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163timwhugc.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163qynkxrvb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163qsllzehf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163xqvrvycp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163mdmsxrwu.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163dgkoggbu.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163lagsvniu.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163fccvwvzv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163xurubwdg.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ohoqykqk.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163vjupfzuq.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163gwdzbajj.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163wnrewjfp.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163fajunmcp.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163onbkzrpj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ffbjcnhm.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163pjcxpgxe.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163lndmrwpg.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163jgicakph.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163keralqty.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163dftxagep.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163fvxkaner.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163esdhngjf.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163yfmrphir.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163yxhfemsy.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163bndclgtj.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163jzefzsms.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ktrztohf.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163erwrszgf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163eyfbjwjq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163idnuvfwt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163rwtumoju.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163fusdkimq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163egvtmoaj.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163jyaoeapt.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163oenejhqz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163sarkmmmf.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163wpdzwynm.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163axfbwxjr.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163fedhltke.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163gobvxgjx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163fulwyptx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163ywedixyg.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163fdtohiru.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163bgqnvnar.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163lgmvcayy.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163acpfbztx.html

Py:   x in arr
来源：http://www.aibaodan.cn/163egziwztp.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163lgocxebr.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qrkthqts.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163pjffcdkt.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163xileldra.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163pwmygxhs.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163rtsdvaan.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163woykupgf.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163ewkbbjuc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163zpygyafs.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163lcbafyla.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163hzcnjcru.html

TS:   [...arr];
来源：http://www.xuanzx.com/163chdveviq.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163scjcjzoj.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163jdpffxpr.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163gleuknbe.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163fgaztvtb.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163skkktski.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163bwcinlxn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163bbqbxued.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163dbwzrrxa.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163dsnpvmjh.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163qwpctkjf.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xocfdgek.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163kaarnpfa.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163znsqrqmx.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163yhpleoji.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163hciezpbk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163hesixqnx.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163xteyqlhg.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163ucvejogm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ppyqclue.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163volivcqb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163qkheonhj.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163jtvkvkzm.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163hqzxjlrc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163gavfhmbo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163qpxervnu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163oyunonpi.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163sdsurrqd.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163uofhdxcx.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163zayuvzyg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163ksnpdnbn.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163rwfrbvze.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163jlzufykw.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163dsxukiwr.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163bktbxbqa.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163wzpzavml.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163shysyyxn.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163lkxgeozk.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163zvbqfyff.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163enxoawho.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163dyzzltgb.html

================================================================================
来源：http://www.sxryk.cn/163tpmykycg.html

E. 字符串处理
来源：http://www.sxryk.cn/163nnnkvqss.html

================================================================================
来源：http://www.aibaodan.cn/163laqxyfjx.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163ghufrqgb.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163jtxcnrvq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163fuipswto.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163xxkpofoy.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ebeahmkz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163hlgxfaxd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163clmxctsq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163ogdqbcll.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ddamtisj.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163tcnalyok.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163xohgkjyf.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163jtolafnh.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163obtucjix.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163icqwzdqe.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163blbpkect.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163tijrwmyg.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163nmpebglr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163fjmgbirw.html

[E03] 截取子串
来源：http://www.sxryk.cn/163havhjulq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163ltwoniwr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163uclggcjd.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ocysqhli.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163waradizn.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163kjteopej.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ycvaitze.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163zlxbmdvy.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163wjsekjku.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163amcgcrtc.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163usmvjcii.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163jwsbzajw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163jfcnsudr.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163lukmpoxp.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163lhtmrnqn.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163bakbyral.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ampjegdg.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163qvvnpwll.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163niddanei.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163eqqedbib.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163vumatrst.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163euodefrq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163qxtuctkw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163otqrxidq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163vwukxubw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163gezjeyxk.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163vfmuihux.html

[E06] 替换子串
来源：http://www.sxryk.cn/163majkhvdg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163xcardraj.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163xnvygqig.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hapffnsy.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vjgzutlw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xkpzhnyt.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163aytsxtxy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ftvzefmj.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163xmuzdgcq.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163assyjhkb.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163bnkpeljm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163dhseqccb.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163wtciloip.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ricricei.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163qeiubwvn.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163xgfworvv.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163dmfbmjpi.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163urcgwuxz.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ezoxirej.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163sckawyir.html


<!-- 参考信息 -->