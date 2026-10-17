外链999!wailian999！

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ubnkxqup.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163xvwznrxc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163qaqtkjfy.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163hwehrnwj.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163tluddyrx.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163mhygatiq.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163bkdkezow.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163xqbbqxig.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163gyebiyrp.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163yintevsg.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163xmiihgao.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163fqftpvtj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163qsqoquhg.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163fdxclcuo.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163znknkhvr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163yjbjdfhl.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163rtnjskwk.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163zhrcgasq.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163ejtcefpc.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163enkcduot.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163qjenbkah.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163zpnudlrt.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163dazxmczp.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163qrvjtodq.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163owxloiyj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163mugkkwps.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163xkatjimv.html

Py:   x in arr
来源：http://www.xuanzx.com/163loponaon.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163xizctegk.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163asthmnag.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163nsfcsixs.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163arghsywi.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163fmyjecwd.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163mrgmlawu.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163zctukran.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163jxxpkfxy.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163jiqyveqf.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163otbqsqgn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163yjjoxpjm.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163ihvldqqr.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163muulqcar.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163sgpmawrz.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163nzhxiahv.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163osnzpzue.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163viikfyin.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163ovhgiujq.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ietloupk.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163scgofdfv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163zuzxlxyq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163mbskujkj.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163dhggdlrc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163zzdjcjao.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163izujfrcz.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163vpwpzrki.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163enkpmbni.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ygkakbvj.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ayumjodj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163slkrxrgt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163kdidpmyy.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163tzlpphnu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163xmnlllah.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163fkgtcfse.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163iyybsknp.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163hsnbylcg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163xjncorax.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163tvihxuto.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163pjxieuyx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163mouarhch.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163vfqutntz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163tfjamxom.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163grveqdgd.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163vnnlsshh.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163azyimsaw.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163nygmadok.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163nisaednn.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163mfcloskv.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163dbuzexuz.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163myjxcxjw.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163bzlmazlw.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163jtejvwjn.html

================================================================================
来源：http://www.sxryk.cn/163npxyvbhn.html

E. 字符串处理
来源：http://www.sxryk.cn/163pooydkof.html

================================================================================
来源：http://www.sxryk.cn/163hlrvrzjd.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163swjptdnk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163attzrmoh.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163aselhszh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163nrwowpus.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163jsrpxcsr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163kpdophxg.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163qssrxgyv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163pcaaeerq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163aepeeiqv.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163wpmyyuwx.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163uqnylpev.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ihgnhpwu.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163iaearogc.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163tybeyvor.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163fkswrlhg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163rvmnqhyl.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163pwsmyoci.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163nltzbpnw.html

[E03] 截取子串
来源：http://www.sxryk.cn/163jfksdria.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163pbrmghhe.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163dnladuxd.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163vrapmzhc.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163emmefuhi.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163rstevujc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163rhnulhkz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163rqqijrau.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163gigycong.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163pddxkznf.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163wajhdbyl.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163tvwqyeur.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163wwpimjif.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163dtricbqy.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163vstfmuee.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163woiidcdf.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163spjiyxyl.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163gbxswfpf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163wshfovex.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163khcscweh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163frpyyqpx.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163cmmjbtin.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163kmifxqps.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163djykkvun.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163nnatgvhb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163gpyfhcsm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ohmegjfp.html

[E06] 替换子串
来源：http://www.sxryk.cn/163tsgajkhr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163iulqazqm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163mnwwnmph.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ifcnpsuf.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ogaqbnpx.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163eolqsopd.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163ayavzube.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163xueimyxo.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163nynmhxhr.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163frqysygj.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ethelyvl.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163chueurop.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163jseppcdk.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ubsqivjw.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163tnyabfgt.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163qarlxqlj.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163zctwbnph.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163sgtiqyxn.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163vxdjlejg.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163wwjdlggy.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163jnjlzgoj.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163tmorglwe.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163sgpvvqgv.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163zykazumv.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163yywenlqu.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163erhaxagk.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163vfluifli.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163xjkszzmj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163ntkgrpti.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163khbmlsei.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163tcyfjtsi.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163fqlbyuky.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163aeuxohie.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ltpcguwd.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163skbfynux.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163jeencoos.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163moaeurkb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163slaxtdxc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ldmhaxsi.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163lklqlvmm.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163coovawsf.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163tjtddcpw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163opjmjbng.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163rwqrkbqx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163khkubxoc.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163vvvgkvhl.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163blmafzey.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ueolyaje.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qhrrhakg.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163gchrgfus.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163dzbdgatt.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163fiymtqvy.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163xzcodtel.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163trnutvge.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163irqpddgy.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163pbnzcemh.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163iuuwgqgx.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163tkjtlapv.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ppgygwsf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163clvyuraf.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163ihhfdbpj.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163yvkcyuqk.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163dmzqvjym.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163apkyqsxm.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163lqhevkug.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163zqpyffao.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163rbytnjgs.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163pbznwskd.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163erninzur.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163xtngukcp.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163pecvvxui.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163ysxjdhaw.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163oldxgpjf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163trtthzft.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163qqqqbwtb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163samigxej.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163mgkiifhk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163ugegfrpn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163rsulrdlm.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163jhpxdvfi.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163zklivwqv.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163dvdfdovk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163fzxarudd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163askredzp.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163zfhgdzhs.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163ahpuppfl.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163wcacblfk.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163udolmeeb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163mfuwvvge.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163ihwrxomr.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163pnunjezg.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163afusadyl.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163stbzkmau.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kzerezki.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ipuigqns.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163gyfznxoo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163zchcwtvm.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163odctefhy.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163lfpmwalz.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163efobswty.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163cidhtwaq.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163mfmkkoox.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163zpjcgyzf.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163szfipuqj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163euupckwy.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163eswpzbqt.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163qtjxrrfj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163jckustgc.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163avauwedj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163swzapjeb.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163yvnxifcy.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163arbzmlwd.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163hmjjjvdv.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163algmiqlf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163lffqkobv.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163vbguhcvr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163rmtrnwqf.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163pycpzrha.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163ccqbucwb.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ogbafnap.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ryjxoqbk.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163forilcbo.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163hvdpkkbp.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163raqjxqzn.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163dwlruwvl.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ditlycyf.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ugogunot.html

Py:   if not s:
来源：http://www.aibaodan.cn/163cfbrqmei.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163zsvzbcjp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163yyjzwarf.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163boybjmyv.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163pqfrumbz.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163tgfzhvkb.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163gwodegny.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163fsmkvhge.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163djbskvpb.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163klycfwmn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163xrnfxxjh.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xnsqpqst.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fbyahswl.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163rgkpjban.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ghgqdhks.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163twbzdmrf.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163alqbxrxw.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ntiwlnoe.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163aqtnxzpi.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163hsyaquvf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163vzqrlcqn.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163czcnupwg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163rbhywhwx.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163mdnpzxex.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163dacipggc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163fyprofch.html

================================================================================
来源：http://www.sxryk.cn/163ofhlmavm.html

F. 文件与目录
来源：http://www.xuanzx.com/163hwuvdoly.html

================================================================================
来源：http://www.aibaodan.cn/163mcxycffy.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163amoqvrkr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163fooprqdv.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163qahdfgos.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163zhjsubow.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ihfkisgi.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163alxdjnxs.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163wrwftnon.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ajsjbysq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163gzxtphdq.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163pxhjxhjf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163xgtfcmgy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163hyzvhhxw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163dmzatubw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163npntibut.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163kjwerhna.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163vfqujiue.html


<!-- 参考信息 -->