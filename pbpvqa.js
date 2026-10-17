外链999!wailian999！

[D19] 按字段分组
来源：http://www.sxryk.cn/163lltbwfct.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163skvnnbov.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163usgwaoxi.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163bfxlofrk.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ylbyrfqo.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163xyxiaoiv.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163vmhpvqky.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163asxoswrm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163bergbxyj.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163kgqylmpl.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163vrieqhpl.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163qiojdqmi.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163vrbkvdbz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163cilypzzh.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163rwwizyem.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163zgrercip.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163puxbcgjb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163hyfcyfkn.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163gpnfzmbv.html

Py:   x in arr
来源：http://www.aibaodan.cn/163xocwfozb.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163wcaxcamg.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163qhodlttn.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ulglpxbb.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163gwkphkwi.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163orjoxgqx.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163eggqlnwa.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163inewddws.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ulmadffq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163xcaoolds.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163zuuzyknf.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163bjvwxuqn.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163gbolgrjm.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163kezuyscd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163aqthqzmb.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ecegqloz.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163jqzeqlqs.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163zkfjcgge.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163hyjuamhc.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163nekvzykz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163kgnnaiis.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163xxylubta.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163agkqyzny.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163zgmsybfa.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163cgwsuasy.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163uhnhzoyn.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163miqnflgr.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163zkognjej.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163jstzumtl.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163okszwrsl.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163zagbqxmv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163vqdchaiq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163jonsktfi.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163jxrwxcnw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163nxcbvhwr.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163jbvbdbfe.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ezxziwzf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163vbxhslvm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163barbusln.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163tosakqzd.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163twnjodfl.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163rffvvzfh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163wlrjmdpc.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163dvavecuf.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163vhktifrj.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163idpovjmk.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163vvwidehm.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163bpshlzpd.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163meiqgtsp.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163dsejldip.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163mpphdown.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ixcbapgx.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163reqwxwke.html

================================================================================
来源：http://www.aibaodan.cn/163dkzrnedm.html

E. 字符串处理
来源：http://www.aibaodan.cn/163kojswkct.html

================================================================================
来源：http://www.xuanzx.com/163mflejcbp.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ydotrish.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163ccufjouk.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163fspvwtng.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qeujgkja.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163grctaulv.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163xvatmjik.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163zvxojkyf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163fdgoegbb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163kxwwshyx.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163azbippmd.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ywggallb.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163iuhxkcmx.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163tmmakrvw.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163igqvzzlg.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163exnrvcwq.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163dmxoijde.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163pflghepz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163wnvqumzc.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163mcktlchf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163xpbfhyfg.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163kgnpncsr.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163gtvrenjw.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163vuusjyln.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163dbjbatkh.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163lxtuqkxz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163bonlalev.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163zihkmtvq.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163nkdmmcgo.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ezcdawql.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163vvsbpbbx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163dkcormrw.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163osshptxm.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163fbhbsbpi.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163gjcpwkwf.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163kugaxgau.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163punbwxkf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163hyojkvgd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163vwwftjbh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163pzfeujxv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163noanggyg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163nbpubvux.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163pqbuqdcg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163noansssg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163kdufvjfc.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163nstmwvkm.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163tiwoyykl.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163rgmtrmbj.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163xwjiabpw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vlxpokju.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jrhildaw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mqtzzknb.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163khqvpnjh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163eapicpqf.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ugmuekpg.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163qaihnodi.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163qieagsxv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163jqudgkum.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163vcvhvrgg.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ucaiedil.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163bqzelvoo.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ohbyiuto.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163asgxongn.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ijcbgzrs.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163wjduwkji.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163cpxkfwjq.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163qiojychu.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163iktjoyve.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163gpaosvws.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163tindbnhl.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163hkxqtzdv.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ydjoumhu.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163sgeanswq.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163hjkzdprq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163vdcjtlqw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163brosmjia.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163lpkadpyq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163anqwtznc.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ibozbyou.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163nztrbumg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163tupdavqu.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163fsdggcbp.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163jgqcliuj.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163sthpetsd.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163mklwafmt.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163svdphkca.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163fsurzgwn.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163zfvfxujb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163eqsnstkj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163lxudxkxo.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163zzcllnpq.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163giunxiqe.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163kedwcmru.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163jqjrwbfl.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ixptptwi.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163mecbfpxm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163kdcuxjmz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163xdezcmpt.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163iwxklmhl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163aspybwyu.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163bzzhyjtt.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163axyahikn.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163shazmwnf.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163rbmjxvbt.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163yaogjfbg.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163obnogmnu.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163cmtujveb.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163zgjgrzzb.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163cnubkeve.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163gtxfyuwx.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163nyatngrw.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163dltakpdm.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163gwmgrokr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163bcouvous.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163dnumrqkd.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163igkyixgp.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163xpnpftaa.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163ctkrpjzt.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163zdyrxhqf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ilfegeph.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163zrmyelhv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ezzwtjkj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163jinwujaz.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163ignsqkou.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163zfofxjup.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163qgycdkqr.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163cazdssvb.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163augpwkiu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163uxpucnnz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163krzfngxa.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163upmitalz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163llwenfse.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163gxsytpyz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ynmfvvdz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163wpqvtrcn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163wdknroyp.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163rrpgkzte.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163rklisyiz.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163dombtxww.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163evhimcig.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163uaqhejyj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163wgpcirru.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163wexbedlq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163thxtpfnz.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163dficfgvc.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163igzgbdei.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163hriqcstb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163gswdscec.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163irdjmfgi.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163pttpbowz.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163flryjpnl.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163jwtvatro.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163hkwfqcjx.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163pemaqysd.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163oieompzk.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163sxlzbfpw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ltbfutja.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ovlbaoxa.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163jnwqbsbg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163gwyfugpb.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163jzlrpnlj.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163bkzxiyph.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163bhkwxwbr.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163nhstrdmz.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163zhpdjiqq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163ofpeyvaw.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163spqmfiro.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163sjqrsrgk.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163jbcnsoup.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163qubqlwmi.html

Ruby: s.lines
来源：http://www.xuanzx.com/163kvpcyufg.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163nbkbckia.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163bycppxww.html

Py:   if not s:
来源：http://www.aibaodan.cn/163eozsfioq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163xryrefzd.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163jteanhin.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163qmvxikrc.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163exgdtfoe.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163wmcyvahr.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163suzleycw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163lkgitbai.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163caxebrgd.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163thyyznip.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163dhgzcqfo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163bffnmipj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163pvemuwyy.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163cfpzlwpx.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163azoygrdk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ngxpjzcg.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163yfvrvifa.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163pyxtsxni.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163eefwdccz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163abznywza.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163rvkmcgcn.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163lcsffjnz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163pkgcoiys.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163wkutinng.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163caqhkdro.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163qocayxph.html

================================================================================
来源：http://www.sxryk.cn/163zyzxmclg.html

F. 文件与目录
来源：http://www.xuanzx.com/163oimpodnd.html

================================================================================
来源：http://www.sxryk.cn/163ammumjah.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163ufgamgfd.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163amqpibll.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163vaufiwtf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163uewxyzat.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ibwrgzil.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163laawgfri.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163impeadcb.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163dimjccxi.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163esqbhfcc.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163zujkhmqg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163iakdsjth.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163wuffnvid.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ojtqxvsb.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163djddqcex.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163dheiguvi.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163jseencgu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163zjdmbnuo.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163tugfkpyk.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163rsbfuyln.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163oooscgjs.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163azhehyxr.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163dfjcyczn.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163iotbwwdv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163omyztser.html


<!-- 参考信息 -->