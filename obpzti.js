外链999!wailian999！

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163jywdbqqq.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163moxjnaff.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163biyntjee.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163uwmhcnog.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163bfisxsri.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163ngwenwaq.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163ehturkcb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163vmxhbcjr.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163qjnzjeww.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163bsxagxtd.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163psupocwj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163tpityhiw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163pxgvlrwi.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163fezsbxfg.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163tmunwayi.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163kectsyak.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163psiyxime.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163hbhrnlqe.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163lnsxcnpy.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ajbiwged.html

Py:   len(arr)
来源：http://www.xuanzx.com/163imvkmatf.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163rcsvqpya.html

JS:   arr.length
来源：http://www.aibaodan.cn/163olpvigdr.html

TS:   arr.length
来源：http://www.xuanzx.com/163prsaqwys.html

Java: list.size();
来源：http://www.aibaodan.cn/163jnvftqob.html

Go:   len(arr)
来源：http://www.sxryk.cn/163uxoktvft.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163cuczptcp.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163esdrxnku.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163cskkvulk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ybvrdcak.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163gmcuaruu.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163xilnnvbu.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163hflfivke.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163wnjvnvux.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163rghtjsgb.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163jbdawpur.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163hquuqffj.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163bvhjqltt.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163hsklxnla.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163tbfarltp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163rgsehqlf.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163yluhctjg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163zhwflznm.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163cdkaiptm.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163gfdafgtp.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163cbffxezu.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ujdxgesz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163qblkxewg.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163jdkvpjlg.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163mqmitytn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163fguwwvaj.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163dikbyuzd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163fgacgfio.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163nfcvxdjx.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ffmrljjp.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163edyumnak.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163tqnsrzsu.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163jighwcbw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163xlwrkwfe.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163oxemwfud.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163hjsefcim.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163faqnosuy.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163xwvfohyy.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163sjkroafb.html

[D11] 反转数组
来源：http://www.sxryk.cn/163mxpoggld.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163kjknnssd.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163otvznxnc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163zxvcvqnc.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163czdgavrj.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163rulqdvvv.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163stcmrgln.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163bnedvyuw.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163pcfldnxf.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163zgrdphdd.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163rhmqsqne.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163mtuildaq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163etgdndwb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163gjgmsgwj.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163ssnpuetk.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163usyerrdl.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163mhkpaelt.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163kidwuthu.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163wjfmdkcf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163vjtintca.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163nypuwbmu.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jvcuacrm.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163dcqjjamt.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163rveecclb.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163nwhtocri.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163jqbrsqxj.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163emloffuc.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163mynropkw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163otrtsqen.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ergoxkra.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163rsdhnjlw.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163kkzimlhk.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163kqzllqwt.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jmseablw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163msudiywv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163prmadnpm.html

[D15] 去重
来源：http://www.aibaodan.cn/163drbtvydn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163hacfmftw.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163gfcpfvjx.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163cneeemgh.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163wmzlzolg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163tzaseguk.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163xjrjgctg.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163bvenqcpt.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ocbmrykr.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163anzgrcup.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ruwliaul.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163xcelyydr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163cwpkabqm.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163oiumtrhm.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163wdubnofr.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163fgimqpjj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163wcthtdyq.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ojeqezmj.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163qgwqqfqb.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163lxvuqlja.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163pdkqhfou.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163wozoyxif.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163ydhxmuob.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163swhbptfz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163erljfhas.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163luihiefl.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163pbjbdpji.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163rzoqnymy.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163kpxhuyxd.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163wexrgmqs.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163jxabyhgm.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ojbfuxir.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163sdyxmafy.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163qnkrrizo.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163arasbrtz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163matainqo.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163jmfnjytx.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163yqeloqfv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163syspmmbx.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163xkowgdfj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163aqprsrec.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163gbsorjaa.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163hkhodamb.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163ncjqofza.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163freqyxqh.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163xualevtp.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163cqgzgjin.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163srjsjiwb.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163numqltaa.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163kmjltwyj.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163rhqjkzxm.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ggeybmog.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163zkhzlwhf.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ghujzikh.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163yosljjlh.html

Py:   x in arr
来源：http://www.sxryk.cn/163rluupkiu.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163bgbzjhnf.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163oeeultdq.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163vqvdkgui.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163qsfptrzh.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163urgdcbvg.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163mdoliujh.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163jqjtebtk.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163dryhuovh.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ufhgweeg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163vzjpbzrv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163xbnpssye.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163mxkweepu.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163btgiiqwi.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163paxhgqbu.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163uiqirhnz.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163aqqjjxcg.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163xgvcjaeq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163mfucrcxz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163uoingkpk.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163vzjdvdnd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163zgumuggz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163oivurorq.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163navhfjsq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163wmefmonw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163kgvhrogs.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ixsycoeq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163leybpqkw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163kzhakxqe.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163intflgvf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163sduchhrd.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163llooxdes.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163fogdkcuf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ozknuuvg.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163ettemtze.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163racvhmyr.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163qbvwnnnn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ehwbteiv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163ntpyfsjz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163gdfjlkcv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163gdgiyuyl.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163advrmten.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163effebkvm.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163vyktjpgk.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163rexopxwa.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163prczbxhs.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163ybdrgvwp.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163fknaguoe.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163gapkljfj.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ywmttwvy.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163bbolntfm.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163ycvejenc.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163wgsmxlxo.html

================================================================================
来源：http://www.sxryk.cn/163azowlykr.html

E. 字符串处理
来源：http://www.aibaodan.cn/163txdtalwk.html

================================================================================
来源：http://www.sxryk.cn/163ggyycizz.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163eeroasqr.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163gclajvqs.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163tcvdlptm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163miejuttt.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163rsvemcfa.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163rlxaimzh.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163jnbfbxoq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163lgnbwsap.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163cjupsbpk.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163raplmabv.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163lfomtofu.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163dzeyskpn.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163gsxlgyfp.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163adzcecud.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163rhfqferh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163fzbnaxdm.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163sdzorqnn.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163jeqcvesu.html

[E03] 截取子串
来源：http://www.xuanzx.com/163qisyrzic.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163xdgzorla.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163ujhrneuf.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163hdvsfexq.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163yzbuqlzt.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163apdpuhtp.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163kxhkvjzn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163fqfwxhoq.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163xgfgsvcu.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ttjavpzb.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163rizhsbsn.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163cywjkbec.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163lztrqvla.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163uwjvrwjh.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163zvjcflxu.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163oyrzehbw.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163rqkkpfji.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163vndlkysg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163esgirtcj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163nmheosog.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163xunkjbsc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163wljifeec.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163vjkxwevt.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163giqiadpq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163mjnocwuz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163mqcoihwa.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163grrvjivy.html

[E06] 替换子串
来源：http://www.sxryk.cn/163scqbnots.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163gavatmml.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163laledsle.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163eaeblkfz.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ojpakysc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dzwbceys.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163kwuxawtl.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163emaxbrut.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163kiudhooe.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163khoqfnyf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163qlsjkrjv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163agwmlktr.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163oapjvwul.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163zlolrfks.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163jrcmxydh.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163lvmqjyiy.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163fjdxgkez.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163etcypgab.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163gomyujwe.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163qekzgoaj.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163vltjrkws.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163lynzkgqf.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163cmyotdwv.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163dgfssbxt.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163qmmwrnno.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ujhbsgkj.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163zcfpbwit.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163xtdegfnk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163bsudvams.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163buuxqczz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163dfubavdi.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wnkuioyi.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163akzmgxej.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ghutsusz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163tswolgaf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163pnbxmgbh.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163qghwcidb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163sdbkzthl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163xwuminmr.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163vkbqfphu.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163cyybpscl.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163euvtqlro.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163fucnxopz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163uvdqlfnb.html


<!-- 参考信息 -->