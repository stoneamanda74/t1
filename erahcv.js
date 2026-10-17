外链999!wailian999！

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163euccuhjv.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163btxpgxyh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163nrmmtdgm.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ocykibjb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163asjqexac.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163oxzmthhs.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163mwsptlse.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163hwknqzdr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163btixmqaw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163aczxicgz.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163fejewusf.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163fgoecomk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163wxldanln.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163yspmbdyg.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163doljnwkf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163jrsbmbjl.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163umcrthng.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163myjvoqnu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163qkojvnnc.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163wbinkxhr.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163pwoviedm.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163mvsovhbh.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163jzngkath.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163lgqeuomq.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163gmelsmnh.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163quhykthb.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163vsdalhnk.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163owxbypzc.html

================================================================================
来源：http://www.aibaodan.cn/163cbctlpwk.html

E. 字符串处理
来源：http://www.sxryk.cn/163kwlnuazt.html

================================================================================
来源：http://www.sxryk.cn/163aatacqok.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163iubagkmj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163aapjzcpl.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163hevfbspz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163zknikrgm.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163rtrqnbiu.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163rzkvacyv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163mflhojnl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163nhijckjo.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163fmkthaaz.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163gkvahhfh.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163upwkouie.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163trkalhrx.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163cfwlavcv.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163nmyfoygd.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163dpuqwnxj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163qgqcnurl.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163xxhagedr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163qmfsfmlg.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ukuvebgy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163odpvpgcn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163quaxtukk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163clxzkjfx.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163mhorrtut.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163qlkmavgw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163vmdetjip.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163pckstlam.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163dlkbgbpq.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163wjisspzi.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163iscghhgj.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ezugveei.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163jepdqjor.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163xahhwpqr.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163qegwhirg.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163auadszue.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163plrubukw.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163kqqdsghs.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163scyqyyba.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163gxscxwvp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163iqjwcwga.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163myxugmsr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163mauwhojf.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163sdgveikr.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163jhtfnkkb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163xdkvvrbk.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163jgswnevx.html

[E06] 替换子串
来源：http://www.xuanzx.com/163nhujkfes.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163iogaityi.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163vwvggkou.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163uqzqzbjh.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wdwqkspj.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fabcwhbk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163msobywkj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163vyzqfbvs.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163bbvxhoxh.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163mygfiwtz.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163zempkywr.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163cnvqafge.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163siifaxpv.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163baeelhld.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163ssbpjwus.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163cbllohrj.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163mialdxvf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163weomzzqa.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163jwzyiaqv.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163pzhmopgj.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163mfexzstn.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163lyqjfjsr.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163sopvhkmd.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163bqrnjjxz.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163uhixeomm.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163yupkhghj.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163djjfzwij.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163rgoahaqm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163getwbbhz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163urjykthw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163pnqmbrkl.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kshfqwtn.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163mxnykohm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163terxrpfn.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163nkcdbuol.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163pmffqwwi.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163tmudvdqs.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163zzhlilsp.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163ktkvtqwu.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163gpzdmshc.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163vrgaerkl.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163aigsjjbi.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163hiyfiqin.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163iaejuqzu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163wyqtoweh.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163dqsxvyzy.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163bcxzzvnw.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163mlgqsxau.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163woorcjko.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163olnjqokf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163wchfsqqq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163zpdztggt.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163pqqhaqrm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163dsopzdyc.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163zoepybwc.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163yyhegkpp.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163zojzghlk.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jxefvwdl.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163kgcssghj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163efmwirwz.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163nggrjbgg.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163rknsyqjr.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163jgbxyfrg.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163rejyixca.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163udadtunc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163vaviuygg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163iozexdaw.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163hacvpzhi.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163iphqcbri.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163wmeughpz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163kzzrkzgm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163cvvxmghv.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163rzqrqnkq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163zxyrfonv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163cpofcklz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163hipmoaiv.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163bzcfxlvp.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163knmnnjbw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ocipyusj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163dluionjx.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163qpgvjfpu.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163kuezaoqk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ycgvwiwc.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163zbfhpxby.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163wcyewisa.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163wjyvdgau.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163gdnficrw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163dkximmgm.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ypquvmwi.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163inxyhygs.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163keqemxpm.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163eacxeuhj.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163vtbtspah.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163eupqxrwp.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163mvhaxcin.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163fzybfvzl.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163gppbekbb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163qzdulfnc.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163dcakknkn.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163xyqsbkoo.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ghiukccq.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163opwmukhb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163yezigqdj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163lpsqjgzq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163gyyttdbs.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163jnufjdvm.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163fpzmvcqz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163raptbprx.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163pktpdoea.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163uapjzuem.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ukqvomny.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163mwtpinsi.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163dxhjijry.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163xpnunpmt.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ntihyzwk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163yobgisib.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163nvvuwnhm.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163nobkqcaa.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163rfalaeef.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163thqwsami.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163clqsodxi.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ipcrqzcl.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163omezpbkc.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163fofypuqa.html

Ruby: s.lines
来源：http://www.sxryk.cn/163stvuqgnk.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163bkudfdtz.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163fvrimlpi.html

Py:   if not s:
来源：http://www.aibaodan.cn/163chvkhclx.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163vapoqpdf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163oerzpgst.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163snhpgiqs.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163fykawgbb.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ajktwlsc.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163vquennwq.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163kalnvvyy.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ceptkjtq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163uljffzyy.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163cpselrfk.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163daeuamll.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fyrxzrjp.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163keohjpcp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163nhzggcek.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163mmqmeyfc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163lwvgjlqj.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163hgebznpr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163eximrtec.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mqhirdri.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163mzrxdqlk.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163mnldglll.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163oetkbyqo.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163dstponis.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163eclyjlnd.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ehbqgyei.html

================================================================================
来源：http://www.aibaodan.cn/163nxmszcxy.html

F. 文件与目录
来源：http://www.sxryk.cn/163nnfmxmsv.html

================================================================================
来源：http://www.sxryk.cn/163uulhzaxd.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163pfcwueak.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163gqyfrnrz.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163baamyofz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163zbaseusc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163vytsmntx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163awlkmgwp.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163omralkaw.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163bqvhvjra.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163jetuvvup.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163rbgxafdl.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163xlghoumi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163zmcypxsu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163avwptity.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163qnizkmxn.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163pqkkoxfy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ecmtdhro.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163sdgyuzqm.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163dulrqqoc.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163kyccrmas.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163edgtcbdl.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163tehemsrp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xcycidhi.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163deuiuhcn.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163rtqhbhxs.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163kfmdzfoi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163gcinhuto.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163thejwszr.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163eriqlmph.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163ebwyzdtd.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163vldlfedo.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163gbskzksa.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163yvppxfcs.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163pzwuzzqj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163nhejiobz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163hluvtgta.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ooccremb.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163pdzylzpi.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163vlbiborf.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163wybwuxqw.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nieymzdz.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ojjyuypk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dgejslau.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163eduwqfgl.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163cdnuygoz.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163qaugowxn.html

[F06] 删除文件
来源：http://www.sxryk.cn/163wflacxih.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163ktgmccep.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163whnhkvsg.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ytszcatn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163emlqlxyz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pbrythir.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163gpprqmiw.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163agokvhrv.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163zgdfeoio.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163iprbzwvi.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163qsqooaqh.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163flpardje.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163dsrrxikr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163oslhfxmv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163ccqiaxpe.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163mwcxebss.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163jfvlkpsa.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163hcpictgv.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163uhbpvtef.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163njtrztoz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163nhnhgekl.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163gmxtuief.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163dwcenzbf.html


<!-- 参考信息 -->