外链999!wailian999！

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163rtjwrfrf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163fufqxfei.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163kaadwtib.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163nffhzzbb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163vvdyzchx.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163pmdxykrs.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ikgcibpy.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ojohinyo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163jgevlrpt.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163bmtkcqju.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163hvjdgdak.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163twefdehs.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163ziqnwoiy.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163fphvvwim.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ehkntywm.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163gmndppxa.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163nmlgyliu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ohmwijlv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163gufwqtpg.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163rrhrpgod.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163fvortuny.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163qbztobzc.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163esjdsuta.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163dmadfdbb.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163glxtdipz.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163mabglxba.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163xnfhdhaf.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163wmakirua.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rqrohhfe.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ofdhfotb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ypexacax.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163rhhcfxok.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163mbdtvscb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163putqzllo.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163mhnelbsa.html

Py:   x in arr
来源：http://www.sxryk.cn/163tycwdkpg.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163udqqavex.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163lvikyoac.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163hfoqqzcy.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163procxhpj.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163edwvqwsc.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163koxhgerd.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163rwdzschf.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163meyvefzp.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163hhthfenk.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163divsmigp.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163cblyeizl.html

TS:   [...arr];
来源：http://www.sxryk.cn/163gcwnsklk.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163kehzydho.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ftmtqqev.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163wsbmbmhw.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163zjwicukg.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163sespakco.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163kkhpqhvh.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163pdsfyquo.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163hhmbqjpb.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163kfextywp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163nebejvil.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163iiqnbazt.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163cqoryfzi.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163bnkjznpu.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163iubcmfnc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163dnmzdaev.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163fuivgkgm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163ujyrbryb.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163ifqrxhcz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163dkzdfjob.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163wlwoydas.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163pyzsihvk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163ooexwrtk.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163owcuqyqq.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163hogqhlel.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163tuvvasqb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163mezdplbi.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163otjcqxhj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163qfyfcocc.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163rzloints.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163llsoftxi.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163qeazyohx.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163rzijeqva.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163mvuovxsk.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163apgaacfv.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ewrhnwvl.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163wjmbuxfn.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163poisfpxh.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163cbgiblwn.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163ioqnsctk.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163jgvcevom.html

================================================================================
来源：http://www.aibaodan.cn/163znrnvdzm.html

E. 字符串处理
来源：http://www.sxryk.cn/163tvanvohf.html

================================================================================
来源：http://www.xuanzx.com/163yicwelvm.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163duaoysie.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163taepetft.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163fqrngfbc.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163vgfmrefb.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163lintuvng.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163qahcxhqa.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163aqittctq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163hoigeidm.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163knyebwzg.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163wuyeuyfi.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163jjtgekux.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163adtqkvex.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ivcgofru.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163wsnaxuga.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163rxjwoefq.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163ktuiydxd.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163tjbbxsby.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163fgefxtpl.html

[E03] 截取子串
来源：http://www.sxryk.cn/163qnpdglbc.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163rfmeweei.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163dqymzxhj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163sqjjknhe.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163zmmcuoio.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163zsdxvlfm.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163hzgxubaw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163aiprkery.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163ndvbuqnh.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163kljdziog.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163laefjxfy.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163keyzbuyh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163mbgkxwzj.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163fmfzfvhy.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163tmhxifqt.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163xwxzxgdy.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163ujifjqvs.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163svgggcis.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163szfrraqo.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163okfdxcbv.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163dnkomuqq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163wdlpmluo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163fbnouujp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163yjohsrul.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163pynrbsul.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163ayywayzw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163kdxhydku.html

[E06] 替换子串
来源：http://www.sxryk.cn/163agcyrlqb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163jphufima.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163jcphrtdw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hndctulr.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fbsztvio.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ovnvffls.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163wzehouxd.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163zloyixkn.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163xiovpben.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163rappsdlb.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ckysmbek.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163afopqvtp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163wmwqtjlu.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ovwyvavk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163ylngcfjj.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ivbfbrbb.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163fqbhhwea.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163wwtoorvo.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163shxychyb.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163rruzelbz.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163tsrnjhkf.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163jcsbrjbj.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163frgrwgpn.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163hdytttvu.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163kpmeoisc.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163icwtejkv.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163dwebxnhp.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163clxibpnd.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163tlpodsdr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163dewitxyr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ujmixmmg.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163cjnmsici.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163rkdulpft.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163fsajjcqg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163kbztbzdt.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163rguiwmbd.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163qogappji.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163wafmprkp.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163pnpdvjgc.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qbjzcdca.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163qwguoeka.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163cdkelzqs.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163tyvmbvro.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163eacengqu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163afwvgnmj.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163iupmgial.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163rdupuvsl.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163yqazbeux.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163necfyplu.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ruznlwzq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163vijnnpln.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163mypefwis.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163dgfnegbc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163chcslyqm.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163scnkfywb.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163bhczrcpo.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163fpxbxmqu.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163bkjwdegr.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163qquebsij.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163pgtdrrpm.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163cnhhmirt.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163vfdoottw.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163tilxntxr.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163hbjzfept.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163wkcbcisk.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163unoiyxqr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163pfsyxwtr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163yjeyszyl.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163uisaduqm.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163zkiafwgs.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163owvzvhne.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163vhlvlduz.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163qddeccud.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163obubwoou.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163orqunbgz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163gohhwwfb.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163glzthjgf.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163sdjalyzq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163bqtnakxc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163tvgndtmc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163hlpgenje.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ufepnpbe.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163qakpdbjn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163hampwpbf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163bxazjddz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163clhwqatw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163xaqtpsyg.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163ownhcygd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163gstcboii.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163xcmefnph.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163phjcevaj.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163fnyoidhs.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163dcbkfgfs.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163pfggduvv.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163krckhtil.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163zdvgedwo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163zpiorlvp.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163cxjqibmn.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163slgvloxd.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163vchpaddy.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ouxweybi.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163zdppdllm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163lylrftgs.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163plxuzyjy.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163nprznaey.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163vmzxifaj.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163owawmvim.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163faaygxok.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163grcdbyep.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163eievfjtv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163iedpvoxx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163tyrnsavr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163jupyqpng.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163vyuihotm.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163jvyfvfjg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163upgvwnft.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163iycfqnwx.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163wmdbuxiv.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ifsidekp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163zzltmjty.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163kzrqjitc.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163omwytqmf.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163zxcqdpri.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163pxpegqkj.html

Ruby: s.lines
来源：http://www.xuanzx.com/163kjzwlimg.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163wfcyvqzk.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163siaukrnx.html

Py:   if not s:
来源：http://www.xuanzx.com/163mgimaewq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ethefmdk.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163djuefene.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163zynwlckk.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163apknwowe.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163eacrxoqh.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163smvcdpzj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ngdroqrq.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163vwzgdbny.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163xcsymzef.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163iiayxiqf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dauvehgw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163mmvfnwjp.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163uodfvwir.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163scepamjz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163fpkivkvf.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163rybibuly.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163nddjlqxo.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163pnekhxna.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163cjgtftst.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163skvilspv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163cmdllewx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163dvnyqyyj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163noyagwgp.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163lsidvrtq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163rcabguua.html

================================================================================
来源：http://www.aibaodan.cn/163xejkyccv.html

F. 文件与目录
来源：http://www.xuanzx.com/163vczlmcuj.html

================================================================================
来源：http://www.xuanzx.com/163qsgwczxe.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163phdyxenw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163btpzsfqi.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163yjqpcnfg.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163pjosojpm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163cwgfwcwi.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rlyatuqj.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163bodsbbit.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163ejxxmkqz.html


<!-- 参考信息 -->