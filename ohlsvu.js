外链999!wailian999！

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163kzsxflfe.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163svxtxbuk.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163ozohzhva.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163pmrdnhgd.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163azcelfje.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163tcxlmuff.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163txfsgapt.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163xijksswf.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163fylpzblz.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163hgsajjpm.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ubovehbt.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163kdjykaai.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ykexojpu.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ptoccqxc.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163mjbfepil.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163dvrhjxsc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163csoabmht.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163jlsnqojd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163zmgrkqod.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163fmuquvbk.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163izsjcnvy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163ychcnrec.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zdqeyvic.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ckdnmavx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163grvcphfn.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163yhrrnvrb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163kivymzds.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163qrglfcry.html

[D15] 去重
来源：http://www.aibaodan.cn/163vzlvaelo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163fhhszqdl.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163qupfhhkv.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163pznfwzft.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163fxskkltp.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163pxqwnddb.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163hmdwqumv.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163xgftlhnf.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163mppxffjj.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163azlmxytw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163pvwgmkje.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163uroxtnpu.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ysawrnpg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xozkkglg.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163xwelwnwv.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163qjicfaun.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163vicqaezy.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163dtnqlkrt.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163qtszvmqg.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163vcfbojaf.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163wfzfabdb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163memfhdot.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163rmhfoosn.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163kmddabff.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163tqdvtwpn.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163uznjccyl.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163hbvlpoud.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163uigkddrw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ltnngaov.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163sqcotugo.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ilfdcugn.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163njyoarme.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163rfnkuhca.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163vqvqjkyj.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163pyuksjxd.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163wjxfqrdc.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163eunafskc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163eijqznwm.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ueeebgiw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163rsmqsjjp.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163cayigkml.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163mxmgbkdb.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163tglatmnz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163sfxdoybz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163jznshukj.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163jyjvxwto.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163cgypfcwy.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163vtviobra.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163kmxafafx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163mphdcepb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163qqpzrhzr.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ubrgnuqy.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163xyclmuvp.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163lfdopvou.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163glxzrqyu.html

Py:   x in arr
来源：http://www.xuanzx.com/163diencfjf.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163uvqdyejo.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163jwhwbtyq.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163qbwnkcxr.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163rwjxegvi.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163wxdwnvpq.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163bvwawdsq.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163dadnajyo.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163raxwlrsi.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163vtsoptxw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163tsqbcbra.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163jbfnljrz.html

TS:   [...arr];
来源：http://www.xuanzx.com/163rkbartvz.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163slwoareb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163uvtdvqte.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163djogrwvg.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163oounxjwq.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163fwiqggrg.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163pzdoajwl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163pyjynlly.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163guobkguv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163rpyojwde.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163teegawpb.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163tzyalbkx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163hkkwqpio.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163oekwfqws.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163amsqncvh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163liottqtk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163aauvhpou.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163snkufcgt.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163ldxcoash.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163afscfnmk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163xejipthn.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163efuhmhza.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163kecpomlx.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163lxnaloyj.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163lfonjeip.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163tdihswoz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163gvsfihol.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163jgdrarra.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163dtgqsjyt.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163txkmqzdh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163wzpsbuiv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163tfzlexpv.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163gjjjcqlz.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163jgdakoyh.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163upybnqyd.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163gtwypqbx.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163zcpbctgg.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163rhsybunn.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163apxjdajg.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163lebslgbo.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163lxzqyaiu.html

================================================================================
来源：http://www.sxryk.cn/163argcqxce.html

E. 字符串处理
来源：http://www.aibaodan.cn/163lntnssus.html

================================================================================
来源：http://www.xuanzx.com/163tfwhpovj.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163lqysenom.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163vmmdqknm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163sgmstvnu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163vyjwffjf.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163bhhkdxwp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163afxptswt.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163cqcrhnww.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163dijlbzlk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163lkvrhdpq.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163gdxlyyzw.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163piglhtor.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163hmbtqusk.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163pxkhgbxj.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163xbdfhhmo.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163aioqdhcy.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163jaugbxqd.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163acupkkns.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163honlfvvs.html

[E03] 截取子串
来源：http://www.sxryk.cn/163uniyvlfo.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163fkmvupmc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163iramlasm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163ydymgvbt.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163bpdsothe.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163jhsunejf.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163srujnino.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163vfxhszon.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163hgqhlvlt.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163odvfcala.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163tpkqrzwa.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163inpijoat.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163kyvwmvah.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163ymaiqpwc.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163kdnjnzxt.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163qmbhmgjd.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163zpicuubc.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163vagvvsye.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163pbbsquhp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163okfvjfqc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163bfbdkujn.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163plwjyvuy.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163glhbyxjp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163zzxjinur.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163lmwfjcji.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163qokdfroo.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163hthkebvd.html

[E06] 替换子串
来源：http://www.sxryk.cn/163zponztko.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163vrmpzzer.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163xtsamivp.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163lbcrftbu.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163eiaajejd.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163aadbhgxa.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163czalgiol.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ghlrcwrs.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163sgargxxi.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163cluldpdw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163nessalyl.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163djvqtnos.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163ijpmopix.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163jayezjbc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163sdgbwcfm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ezipuutf.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ymztmjlr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163zqikykpc.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163gwznrruf.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163pxkiggvr.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163namlglyj.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163arbwsksh.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163bshqpcjx.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163xbnzngym.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163zvvcuyqk.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163tzpotjyw.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163buvzdcqz.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ldkxrpvn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163ojfvkhzf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163jsobwpki.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163fhrvuoxf.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163rcjyrefe.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163xramoasm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163pwmgtfad.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ctdpgwvt.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163brtoqmja.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ctnkhfmx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163nmuohzik.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ltyrrjgv.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ltwitfrm.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163mqxrvbef.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163zgjcxvgn.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163uhobzwls.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163nranqrzb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163zkumluzo.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163vchsmwus.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163bhosswat.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163xcftykib.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163cpvojbst.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ktldmziy.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163edxwhgln.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ybnvvvxa.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163qtmebdek.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163kogqpkwn.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163mjvyatcc.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163tgttzprt.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163gtqeixnt.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163legicgod.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163sgzeypzq.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163uyyokqzs.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163uhjfdglv.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163qfhvzeiw.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163supwplxd.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163cckrobpz.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ykaadbim.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163esmwhfpq.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vdnybwod.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163rumkcfvj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163yzikbilr.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163zaaoitmw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163vyonheqb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163yurjnype.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163zxplxqls.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163hscmflcf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163frihdxdx.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163wlvpmbag.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163brljtdqo.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163pdzaatkr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163blimdrze.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163hjzixkud.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163hklpqofy.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163pkkqmiuj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163wkeduybv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163rtmzggfn.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163pizdjhgi.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163efkrtdco.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ckvnpzsx.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163jgnzuvcz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163vkytddmt.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163kcukdrvu.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163unxackvb.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163izwbklhu.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163bgbbdvju.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163gwobdqyg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wzuosuoc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163oasjdusy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163xafoyuxj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163hwwckmpe.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163simqksmd.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163bpoincah.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163yocvfvdy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163frmnvgkv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163drhvsfzv.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163zawxuiaf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163jcxcubut.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163tgqzzeuw.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163klaczgka.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163yehligra.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163dbwjcceg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163rncdsppr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163gbixkvsf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163hqyodtud.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163pjfgluoa.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163gzavdjvd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163qmikbozz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163vylkyvgq.html


<!-- 参考信息 -->