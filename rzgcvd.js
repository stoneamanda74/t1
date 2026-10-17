外链999!wailian999！

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163rywkaept.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163hgljcyqo.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ldpenlpg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163ynrloyei.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163xgcbbqin.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163jyoythhm.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163pxkuimje.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163wtuiggzm.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163shrpwams.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163cvuwppwl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163kqewhxwb.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163rsuftuto.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163ogmxfnuu.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163luuotqsw.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163hsltquzo.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163qfmnabot.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163yhoelyqm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163jlzpwfxg.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163nrdysjxk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163chmovgai.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163nnqigegb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163pzjtsvfl.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163dvpalklo.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163dcdiqywt.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163bkzuexce.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163rrfyieol.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163qvonxtya.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163nxuvntep.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ijhgjuqc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163tncuvujb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163uuydezxr.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163qglhmedk.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ojxsqgjq.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163iwbwndwg.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163yaadcxmx.html

Py:   x in arr
来源：http://www.xuanzx.com/163jxxllevo.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163jbwnfzqr.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163krihrnma.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163qnxulejn.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163nrgqysxr.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ntzkfifk.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163bpdiywxy.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163pxhpjsmj.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163ypfanzas.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163yadxgofi.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163xckiwbbw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163vjlquphu.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163riaicbul.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163fbsdqxeu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ywlinrhn.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163jqcwjxxv.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163veprumoe.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163kvgnckmm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163mlvpaeeu.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163fsypkolr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163pjhytbjg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163zsllvzxg.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163pahqldge.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163wudtjrkr.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163iihpiveq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163lgngvcvl.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163xrbuhcxh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163wsujbofp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163yxrrbfqa.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163tzagkguk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163gzvsthaz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163gkmseaql.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163mfphpsuy.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163jzysrclx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163wzrpyqxm.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163lqbbgueh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163azryamgt.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163jgyywtmd.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163gxzolfid.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ejcnipkv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163vcdzweuk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163bgsntuoe.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163hvmyaboc.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163zktynfdw.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163vssiyzcv.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163tpezgarw.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163fauxxyew.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163bcwolrog.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163vcnarxhk.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163oaxicthd.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163mutimgqm.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163pahbzgya.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163jvsucmye.html

================================================================================
来源：http://www.aibaodan.cn/163kukvhyge.html

E. 字符串处理
来源：http://www.sxryk.cn/163fgjyqwrc.html

================================================================================
来源：http://www.aibaodan.cn/163gdyuwmjr.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163fgquhcya.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163erpxeate.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163nqpfqznl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163anibjeae.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xqovoxfc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163zgeglaja.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163urdfvqnh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163oeqlyzgm.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163myuglxcc.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163lvodfkza.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163fyjmpoyw.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163mwrxdlqa.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163faqosfow.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163dsgtsmed.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163gkdqvxnw.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163aufpqwbc.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163qkcdbhew.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163uczuwsyl.html

[E03] 截取子串
来源：http://www.xuanzx.com/163ovjzvgjv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163vwosndme.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163lfjnmjef.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163fsuheflj.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163rrlmipba.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163vgazgkhv.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163gzkwmeay.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163irilsrlp.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163slgrhyoo.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163nrnkiyfu.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163pxnpylee.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163bdfqezmk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163olhgptur.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163vajdvggk.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163pruwyfos.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163eponjvgd.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163bzslgsgd.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163emjnadim.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163kepinmzu.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163lnvdmtcc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163gltluwsc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163dlephfld.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163tqxjejik.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ezfonuns.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163hdrtzvty.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163bhjmjqqg.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163falijuwk.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ikgwwcku.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163geefpqjx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163nfwlyagl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zmefuwwt.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nirpxjxv.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bismfbty.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163dtamnttp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163gxjzrnqh.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163yigodoew.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163aveacgmu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163vaptcbxe.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163mfsmkbnx.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163xtpqpmer.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163votzboax.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163pdkhorzl.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163lwtprldo.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ozbleegm.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163wrfvkafn.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ldhrmnnv.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163yuoinxma.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163imahtqck.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163tezcnsvj.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163zzaesfmt.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163kxdrwvdb.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163oopqmneg.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163uqwnxetc.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163usrnfjrv.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ttsftxtj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163hnzrvhno.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163zynqnrcg.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xfuffkhb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163gtneaumm.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163tvedblew.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163nlgnklkg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ujrbihec.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163dyalolni.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163homeyzby.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163slyvydoa.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163uyqbfazv.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xzwbnllf.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163avxijunk.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163niyfabtd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163mqnlltvc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163jbegeqth.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163zammmfas.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163esyljhfj.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163nfgjjykc.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163fflrkbgm.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163oabxyile.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163rnarswev.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163osqmzmuh.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163qrnlgpkh.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163qawcvjvl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163lrzpfcvd.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ztguysmx.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163feihjyob.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163orgurzhl.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163xrhgezxo.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163uyytanky.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163daqhamdw.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163kdwpbhav.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163pucyqett.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163vcofdnyl.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163aoadaskd.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163aeichnbc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163wdkfmayp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163kbphycsn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163abzhwawi.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163srtbulad.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163yhybobzk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163opagwbca.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163agklfdnq.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163rbzbessa.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163auiyaanx.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163dkrzudiz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163hyqgsyum.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163teubqmtn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163kdvbubvr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ujrgczhz.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163jdbawmgf.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163psjvyoax.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163khowkwqd.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163thoohjih.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163uohtdnsl.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163zwkrissh.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163puignuut.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163sbwsjdta.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163girmfpiv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163wqjwkuki.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163wfmwoqkd.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163hddfzmis.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163taglmgnc.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ujoyvtot.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163dkvuuxun.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ssxlfadu.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163deaplbce.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163bnntzeyt.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163oyjstjtf.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163gkuclmfz.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163dauuvurn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163cujiktyf.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163hhlcgtsl.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163rsurzvsu.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163vsnprvly.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163urmedwsf.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163vowigkcb.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ufgocpec.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163hfvgnmiq.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163dnpqsqww.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163xtvbccqu.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163qflqopru.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ulwvafyx.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ugwycbzg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163pilphcpv.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ebfsupet.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163hzlbdnsx.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163afqmqsod.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163kukicxtx.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163dtszixdd.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163fydsnpah.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vfvitavr.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163tnnyrakc.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163edfdzmbg.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163mvrxiowf.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163cvirfxrr.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163khmdgfmw.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163bqgedlsi.html

Py:   if not s:
来源：http://www.aibaodan.cn/163gxzxcngh.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163yupicera.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163pipctbkh.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163urjgsojx.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163ykwrgiqs.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163qbrqrqvg.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163dfxbnywz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ysurxiya.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163rrtofdxr.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163ozwdpqtj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163zzlfpjtm.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163iktoooit.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ogcigoqz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zbreinby.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163mdoacwqy.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163atrfjrkb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163twsklfdf.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163xjnskekk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163nnwpkqaj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163nbsydvhy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163dijmkzmo.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163lyinjcer.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163jyzptyuy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ugjazldx.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163mxqzqzne.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ksormgxo.html

================================================================================
来源：http://www.sxryk.cn/163tmbuvzyf.html

F. 文件与目录
来源：http://www.aibaodan.cn/163yhnbamde.html

================================================================================
来源：http://www.xuanzx.com/163zezoooss.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163ppcdpcpg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163rsqxokxg.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163npcdhtsh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163atbujcnx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163mxjxpsku.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pxzzzlnk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163paxckubf.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163mrrytjqw.html


<!-- 参考信息 -->