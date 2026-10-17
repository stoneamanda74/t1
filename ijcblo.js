外链999!wailian999！

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163hbflkgca.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ijkfouop.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163mvaiufgv.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163qifxsqln.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163uhqkfxkx.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163eguffbrc.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163anrtsgkq.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163qigwlayp.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163pqauxwqo.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163nepiebjm.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163yezgriwo.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163sduhtsib.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163taflnxer.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163jaueiuwa.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163gazrvvcb.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ddpagrke.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163haikiwgf.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163twgjrgko.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163nvcfafkv.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163pegrjsnv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163tomjswfh.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163eqcvvltj.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163pdgyksdc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163pcluaypu.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163itaxvztj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163qxsdyfkr.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163cbunkbpx.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163mtqapror.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163bscyrukh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ljohccnh.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163oczymxlq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163gjuxhkgd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163fopgqdvd.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163jgaihuzn.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163gxfsqbfl.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ulusknbq.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163laofbvlb.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163fikywhub.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163nbifaaql.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163zzqusunc.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ipngahjf.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163xvuzaxyy.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163sqypbbul.html

Py:   x in arr
来源：http://www.xuanzx.com/163hlcxzinx.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163yyjrlrel.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163ouvypnug.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163jrjpmvwg.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163tkkvfqij.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163abdbhljc.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163vbhhvefi.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163bvakbijq.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163ajlhpozx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163mlbeytas.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163edgrddto.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163jvqskdsc.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ykdevxdw.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163rriexxol.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163hhfbdwqc.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ihschkrh.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163aiahwrda.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163benrfqkc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163snnhqibz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163cnhcmyzy.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ezeaqmym.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163yceexizy.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163stzpymnv.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163kmxjbwpx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163yawnkwxw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163dwgjfmum.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163xkjfpsxo.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163gwsijanq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163smpjvyvx.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163gvueulaa.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163mknqpwdi.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163mfeognkk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163hgbdnisu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ycsolnrb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163sqyqjmkg.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163xvfocttn.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163kfpiriuo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163uhzwnrom.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163uvmugufa.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163lwnstfwn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163zlksjudy.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163wrptecfb.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163qvlynoef.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163qmksefjj.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163hnlrdvll.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ewirzaue.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ffsrjjey.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163qpllczcg.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ayxvvmkw.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163qmccfyxz.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163bfsonoat.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163todkkgya.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163krfcgzbz.html

================================================================================
来源：http://www.xuanzx.com/163dfaiscly.html

E. 字符串处理
来源：http://www.aibaodan.cn/163fgmceoeb.html

================================================================================
来源：http://www.aibaodan.cn/163qwtmjyci.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163gkgubqtj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163hdneovlm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163jmpcocsr.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163idhgdhwk.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163vquhkvgk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163psbcgqbw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163yxggktsi.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163ubmfmxma.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163jzdvisan.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163hachrkuw.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163swyhohgg.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163pnjgqcct.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163zfrjhkzl.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163lxszaadx.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163qxccopff.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163wxqlulxn.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163frprjadz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163qhohyydh.html

[E03] 截取子串
来源：http://www.sxryk.cn/163weskkjkq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163jzkhfawj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163mohgxfvg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163indjfvga.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163tebnfkkx.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163jpszalag.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163eguoexvf.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163zmjqgybn.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163dtblrpxo.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ygcvfbpa.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163uomwgtnk.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163xetuqhqg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163rdedjqub.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163mwmomxlz.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163mxcqzlmb.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163ctgniqpf.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ikxghwpe.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163xoujmhgc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163rrcjwgfh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163yuptabdq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163xqhgqtex.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163fzfdsobe.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163xfnrznvn.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163bqvnubid.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163bqkdjdhn.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163rkfrjjzu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163taupsqso.html

[E06] 替换子串
来源：http://www.xuanzx.com/163vandlwku.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163kphlkapo.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163pxgwwkxo.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dvszqaic.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wwucdvjh.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163djzqehyu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163fcvgxnal.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163qmougdlr.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163mxqdgcel.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163redazzxk.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ndzlqeju.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163lsfiersi.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163agamyexc.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163zqnubzzr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163uothcxud.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163pknhsore.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163bzavsfrs.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163abpyfrgk.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163ldmujsry.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163sxslqhoj.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163bejezugn.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163hinsqmiy.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163bepvcyfb.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163oqhtwzvl.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ktzbdjbn.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163xccneyio.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163whexdtpm.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163debzvwct.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163jdzyreeb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163yutrqzmu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163evoikkoy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163gopeafno.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163yohxitbd.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163tdxkhksi.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163htprfcui.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163jnohbfwj.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163ygohyqbk.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163qufcfihf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163kvlxcqgp.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163gitagohd.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163fwlabkyv.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163qskkphdr.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163vezuqdlw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163utscjqxs.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163mabxbvbz.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163axatdhii.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163xflnkcav.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163hvxceepi.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163patwyrsv.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163zzklzyls.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163jrukpyzh.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163cctoxveg.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163cmdsjwtj.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ntudikdd.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ftfiztnq.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163zdownjqs.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163gkegdvvp.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163yeutwuxk.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163unusckuy.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ptqvvcvd.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163pknlumax.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163rqbijlhg.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ulhwzajo.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163pschvogs.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163xvwlayeq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ojaxajaa.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163nugrifgr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ljhjhkws.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163nqmcqwvy.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163kspxuuoy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163solgrofw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163suenmzae.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163rmbrqtsc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163xonyukel.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163sibrqzsx.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163qkgcfiwn.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163gqeviraq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163kmaetxpq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163fxrzneaf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163mifgehnj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163rsaxqstf.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163pyjcrfox.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163fwfbxauv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163kphijine.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163dqnzyjol.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163udqwovck.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163akpqmrwx.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163nyunxmkb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ylixnbsa.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163zbyasfqx.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163wnxdbeef.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ziqrhbbn.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163mcdfqpyg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163albgiizg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163cgsgnonv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163cqazgqwv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163scopluqj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163yultmrye.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163wijfqmhl.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163mynwiiez.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163krygxter.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163drgihdmc.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163gajxymtx.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163juyqxhek.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163yocegitb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163eurnmirx.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163uloezycz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163jgiohfcb.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163bjezpbuu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163nepoatbp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163okfskqlo.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163zvqdkqyw.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163wrznchyh.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163nxjzjgdw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163erzqzzks.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163nnlydyxm.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163hbgjyllh.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ehhaprjv.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163cetxpwxf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163xdussqtg.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ehrpblax.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vfrwnaij.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163jafdszca.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163wugytzht.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163mgdthmct.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163cklndkkk.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ptrqgchd.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ajwbxqkq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163pbwvwjeh.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163skntfrsv.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163jsxcvybg.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163twqsiodp.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163buqpsoex.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163oidorxcf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163vekdhvsj.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163jvmdyzne.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163kyzcrzzp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163umgtrqli.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163pvqrjlzv.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qilvggwp.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163koyefdgn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163qqxezilm.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163lxhpwrvo.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163wkbrbglr.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ouvsbwar.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163oboqipem.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ghrvfhac.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ysodfkjr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163mnmbcghx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ulqikbqc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163eqlbdjyq.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163jxahqnak.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ljcedwxg.html

================================================================================
来源：http://www.xuanzx.com/163ixwjiyix.html

F. 文件与目录
来源：http://www.aibaodan.cn/163svzpacsn.html

================================================================================
来源：http://www.sxryk.cn/163lpilogfy.html


<!-- 参考信息 -->