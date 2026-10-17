外链999!wailian999！

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163noddwuip.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163mtgrrrfm.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163oatsthqn.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163vdspdzde.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163mxrcopwo.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163tafpieqt.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163mvcckggz.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163hmlwkubm.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163rfveyhwx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163dtgsqepq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163trrajgxf.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163xyhychbf.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163cuejdpki.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163bshpqevh.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163dbiwlvib.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163msrijngb.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163xtdrniuv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163ihibdrrp.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163jyqmmouq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163olmzuvgt.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163gvzhjkrz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163gxvmadnm.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163mneqpnnh.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163yheammkr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163mzthcruo.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163zlvceywl.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ieyadrkd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163busyzyto.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163lzjdeods.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ijqwcvnw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ezpnkzad.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163qgjxbrqr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163msqskipf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163fdnologx.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ierhdjbt.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163kztsuslo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163fpksgyaw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163jkmbmpvh.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163krwgwqmj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163azkmmbzr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163gcjjadho.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163gqcsmrol.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163peolcnfu.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163bumahkjj.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163wlvrpyvt.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163flrbbnda.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ogpgfgym.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163idrxhrip.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163pmmtexqs.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163wvorljzv.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163brpzipsh.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163osiwpckz.html

================================================================================
来源：http://www.xuanzx.com/163mpsphlpm.html

E. 字符串处理
来源：http://www.sxryk.cn/163vcqeokrp.html

================================================================================
来源：http://www.aibaodan.cn/163qyjlwdln.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163tylckdxz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163bisfzoxv.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163kbmwhwyu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163wuxmplvl.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163tbsiuhee.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163xvgvnzdw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163eadqbvjv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163zycciugw.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163unbyeuxs.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ugeacebc.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ayivljzl.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163izkjwyeg.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163fokdoxel.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163bjqdzkkq.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163eqrnvkzt.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163emzkrisr.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163jooycghl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163agxwdpom.html

[E03] 截取子串
来源：http://www.sxryk.cn/163lteqizeo.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163xfdecapz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163twejxotg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163kleqqubq.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163jififvuc.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163jvgksptf.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163owhidrgk.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ozqmkgmg.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163aejfeynq.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163bhmslvrr.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163qkpkgodu.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163hyjufgje.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163boojizba.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163zqkogtyu.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ymqtppjr.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163weftkhuo.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163ncxjpdgq.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163eiiieesh.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163zgcfsosg.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163rdwnlwnu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163eoeuazno.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ysxxtnvy.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163lwpducwx.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163gzgrfgso.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163iehqflyx.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163xlucycmc.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163qzxvpfgn.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163fogfyuzo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163huwvmtfb.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163jpmjbfnx.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kkkkztwf.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tdiojzdn.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163lohdeary.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ynitauob.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163upplqsfq.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163taainhsz.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163moftilko.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163taefsysr.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ytaksghh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163tgrpzkmy.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163pztnvick.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163zxwwuddg.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163wcnoxpdc.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163sdnqkmoa.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163albkvfyi.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163aethtywb.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163znlmmrjg.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ygghbyya.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163uktntdfn.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ovnwbcqi.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163pwwcnixi.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163hotgcfoc.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163xmcaosnt.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163namguoey.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163awibahew.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163tmamznqg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163cdwlnxlg.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163yhcdadiz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163dfohjjon.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163rmngnjby.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163sjwhkmte.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163pgllswiy.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163hhntbmtb.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163xwricice.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163eeugnlhn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163vdnvjcne.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163xgwzgfeq.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163gznrhjnr.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ofvgwkel.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163iqwqaqjw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163kdptsodq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163wmneoqmp.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163rcxvftih.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163hffscryp.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163rgzjnsnu.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qfjwbqar.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163sfekoexe.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163hipvgmwd.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163kvdqztdt.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163blauunll.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163bejohwpi.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163bqueuyjq.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163jktmxvxx.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163kzgpmnwy.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163kohgxxpf.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163iftihkzx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163hehwnbnv.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ducaapec.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163vuthioqo.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163dknpgmam.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163fqrhngqz.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163cxettwye.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163zwwvhegn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163lqedgheb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163nhuwyenp.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163rqdhbvyl.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163mnyxkslx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ajumxhmg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163zkwuamxt.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163psmuqnyf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163xpziwwkf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163vgadjnjj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163euxdoiqk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163bmfanwxe.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163wqcyibru.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ucxcvnkz.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163hrgvhahw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163iocrhebe.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ggpnonbe.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163devdcwge.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163lyjhkxqu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163bphqawmx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163ibicdqmn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163nsjieiyv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163acbrpdkk.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163uaajvwuq.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163oacsccqp.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163tskcrnit.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163cmykzmqf.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163lbgqzzju.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163fcrxedmf.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163yeyeoddw.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163bllbpdca.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163lgwrnehn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163jsukufsz.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163xiegiodf.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163hgruiamm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163wvosjyta.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163yysowbve.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163fykxgqka.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163refvkhwo.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163hgufcops.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163zshqwgho.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ejoclgvh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163koogdbek.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163kvfuxihc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ryddjxsa.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163ooccfgst.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163rxkabcwt.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163rfbfpbcs.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163qgtpfnhk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163zxnyhnye.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163iwmvtwsi.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ykrkfgux.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163rakyupwp.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163jbedwdza.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163zvqfgqbg.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ninuydue.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163yokuusxg.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163zyeglpko.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ndxqnqyj.html

Ruby: s.lines
来源：http://www.sxryk.cn/163zvnvfxqq.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163cmtgisow.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163fzsdpnvm.html

Py:   if not s:
来源：http://www.sxryk.cn/163trtqsaco.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163bnldhgwk.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163hitasidl.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163iefjflel.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163kelpcmks.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163bxxatcge.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163eddzvflv.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163eaewauwu.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163eetymwwv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163rskdhhse.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ibamcbzh.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163npecyqym.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qgltttiq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tpfxqytv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163vezkhwqa.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163vtlcbpgl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163yuxecoyn.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163otzubptz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ixkmbyii.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163uvfflpyr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163jmwupabd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163skdbymdh.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163rfgcrmxb.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163fltpsxsu.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163nifkdijn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163mqaypsyx.html

================================================================================
来源：http://www.sxryk.cn/163vrrdzhys.html

F. 文件与目录
来源：http://www.sxryk.cn/163umzzmecg.html

================================================================================
来源：http://www.aibaodan.cn/163izfzrijl.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163skwasyeg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163drskoqle.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163ypoacvib.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163qhciehma.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163hpsbryvy.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jajcyvuk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163qllufopt.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163mmrtxeuw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163glqxklok.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163qfeymhpq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163mslsriut.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163mwnmilhi.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163bsljpxku.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jcchzxbv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163bufqlums.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163vfzjytrh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163wbibqktb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ihitogel.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163gtrxahbl.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163twkixbtd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163uurycicm.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163oszyvava.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jzrclomj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163uvgputtp.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163mjpttbme.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163bawzqvzt.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163embswutf.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163prayrynx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163khukpyzu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163gfoqbylw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163gojtonbf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jpndxgqy.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163fsiyfmoe.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163gpyrggxx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ocklaabw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163wydmvzgj.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163pwtlccwf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ldowsbdl.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163dmbgmdew.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163mcplrxex.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ulhhwuzt.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hhrkqrer.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163yrozyxpo.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163npvbqloj.html


<!-- 参考信息 -->