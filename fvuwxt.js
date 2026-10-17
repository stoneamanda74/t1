外链999!wailian999！

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ubiwmlwk.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163hluouxzw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163flmtlqil.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163tpuazjir.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163cajajagb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163vherxlxf.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163wxtqrqpf.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163nkgyeatc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163klmfxcxh.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163kirosppc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163alvnxeks.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163hwhmlpdu.html

[D15] 去重
来源：http://www.aibaodan.cn/163rslyzxok.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163fvdtmxqa.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163trpwxeef.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163osrxlhfe.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163qeivqxhw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163bqoubmyk.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ndyrurib.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163ceyzfaya.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163qmpasenj.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163yjgwghse.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163dvptynse.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163nkntypbi.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163hlfzzpat.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lfebrjai.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163mozcqotu.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163psdvtbxg.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163sezmziew.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163kvnnvxbl.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163menrtkxc.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163dfkfyokf.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163elpbvuyy.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163oqgffpgc.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ulbxrvhs.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163elqroojn.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163bnqmrdll.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163vrywjsuj.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163fbauioqu.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163fjxtdylx.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163exreetdb.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163jnbvbvmm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163hwpyyhel.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163fkeqbtwq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163hgmguegc.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ehnjxarg.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163cyyekmet.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163sjkymdze.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ffdohqiv.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163fifybsjz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163klzpcvbc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163egkjcfyc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ltbxrfdm.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163qnoceiwe.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163asuyuylx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163xckvcvpr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163twxfueue.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163miulfnzs.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163iaiilnjx.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163shnjaowl.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163uqiravsx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gppgnsql.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163egkcqhzt.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163dhtryboz.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163xjdmhlsa.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ipkgvewk.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163adxcpqbs.html

Py:   x in arr
来源：http://www.aibaodan.cn/163lmjeuexq.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163dpglurpa.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163ojqtddxx.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163tsvccoac.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163wdawheya.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163rexarsds.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163gkylawjl.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163kxtclfkw.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163uizuvnze.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163jvflhmui.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ltfzfihz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163rnavfbej.html

TS:   [...arr];
来源：http://www.sxryk.cn/163dojsifgk.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163koedrcyf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163hlsxpkvu.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163fvbxieta.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163bydoptii.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163qahhznds.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163zzcsuiou.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163wslrodui.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163gxvjmzzh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163vlkkxiut.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163rolsttkt.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163hfbyfgpk.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163npgikpdu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163nlwgtfvr.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163lamwtzue.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163tqzfkmce.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163hmqbpphu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163gkubcegw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163hkgoaagc.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163bbksodpo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163svawuzlc.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163nhzbeuxi.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163ofonzlsp.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163thazeazb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163nyfoirby.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163jhdnhkku.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163wejmjhmv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163qiybuzwn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163nnmjgssu.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163bctfxxgr.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163hfidblpy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163veqvcpll.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163iwxbzgcr.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ntgfbulv.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163yznlzupz.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163zzgrjcjq.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ibrlqiln.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163xnwozovj.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163qngopzem.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163wuxpgben.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163bafslbhq.html

================================================================================
来源：http://www.aibaodan.cn/163jtcnpxtt.html

E. 字符串处理
来源：http://www.aibaodan.cn/163vxnxnqhq.html

================================================================================
来源：http://www.xuanzx.com/163rtamztmo.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163qoziomjp.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163qnljpaed.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163dvoysftn.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163fncauszd.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163mpsnyadw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163xpnjahdh.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163iujcrwic.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163fauepdxm.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163omadvafq.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163ftwujbzv.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163empqsrwn.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163vtojmawf.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163htosnnmw.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163xcowdyso.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163vepjtqha.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163fuvsrprc.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163yqxzelyw.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163onjvisos.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163kwhsfcfr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163euhezrkw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163topqhfdy.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163xrpvqhdk.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163jrpdwzgu.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163uovldeid.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163sclfwdcc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163cngjipxt.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163hxvctmfk.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163bwqcdpfk.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163bacdpnda.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163thsfnkdk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163cylyphfm.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163almvsheb.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163siahbnmi.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163ebpcdhnr.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ilagyoaa.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ncegxxmx.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163rzkafzss.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163vcseqyfh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163bwpmxomq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163lftlrnkr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163qktyipkl.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163fmkhcmib.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163fycehnnp.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163lxngpkqe.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163fixyrety.html

[E06] 替换子串
来源：http://www.xuanzx.com/163nvsqbbmh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163gpedxejb.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163bwjfxgzr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zsqraeaz.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bkyduwyl.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wrifldcb.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163mfbaytbb.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163leoaxvln.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163oxqqugsz.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163qjslxawt.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163uetmidxj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163zdwcnssa.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163gpxclgee.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163lqatmqaz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163bdlecezj.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163lrtelpwb.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163shitfaeb.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163xgarjnrs.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163dhdqgyqc.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163mjzllzkh.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163gakbilby.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163acideigm.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163sjrsxebk.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163atrnbjji.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163kvdcdjcw.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163wtrovoql.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163gwikdjrg.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163dcddoazw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163stpbwjca.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163kfjduwcw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163uolalplj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qzlxmzgz.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163hgdgjutp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163dwhxkjdf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163sdizvprp.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163tdupvpyj.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163svgagfia.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163hbmythis.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163vnjmidco.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163xbgirjxn.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163sicamvpp.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163hgpgdidw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163cycmfvqe.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163vsjqsfqz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163vtwbfvfe.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163qtyfbhhw.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163xdihqtdy.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163qtnetwqw.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163gzusmjnv.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163zcifigdm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163kouvpbry.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163gmumkwdv.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163agjxeptt.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xhliashm.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163htrcgtsz.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163vbfkqoco.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163swpagplb.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163svqeabih.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jzuvuflh.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163tjxnhexs.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163fbjacxho.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163ajqhorbj.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163lghkgcre.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163mhzzjzcl.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163sgamrfgg.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163yovmknqs.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ictbaitd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163mhhviloc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163tajgepnp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163otqxuogu.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163nwonmpdr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163ynwdjoog.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163bxzicwxm.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163nvcyirvg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163llhdxkba.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163lbcorldg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163rhibjusg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163ehvwjsze.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163pmqaebdd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163gpxgeduy.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ndvarrdz.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163vvotodgk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163nnwoxuqg.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ffjfsfrp.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163yilbkluu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163gqlhpfii.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163uezjfthr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163mmfdvion.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163vchavcsd.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163tajpoheg.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163wouoycrw.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163fgpfzhub.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163niaubzrb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163lfuncjzh.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163sliuthsy.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163zhdufjsm.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163cxhlrttr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ezdjpqvj.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163htncvuts.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163mnptqscr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163jofajcnh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163etvownvr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163bidfmpfm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163gutnojwc.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163gqoiarlb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163zgvqrgai.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163tzjxiswd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163wexomvhi.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163bfwiyxwq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163hhrldcrv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163vmydottu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163muhldbxm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163wdtligby.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163kevfzjrg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163uawxabvh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163grnimcmg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163hoqlatfw.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163uborlomy.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163hjtxzqbp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163gzeuxbei.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163papwhkkw.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163oaolqhuc.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163orlogufh.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163jvtzizvd.html

Ruby: s.lines
来源：http://www.sxryk.cn/163jxsaoyej.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163ucxweilu.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163kpdddvmr.html

Py:   if not s:
来源：http://www.sxryk.cn/163zkqzucjd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163wbqhzzto.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163oysmhfgq.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163jpyouxne.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163pvbjmkff.html


<!-- 参考信息 -->