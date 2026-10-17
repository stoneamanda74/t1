外链999!wailian999！

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163veoayrdm.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163vsefsxah.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ppknenlz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163vndswmur.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163iznjmdfc.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163gsaovlva.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163lzsjkgwb.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ypgsledx.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163jthhyxnm.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163vyezvhlu.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163cdvhvgpq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163efpjjnmg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163jemcwibc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163cbdrnzqo.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163gmyzhnmb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163zbeodbnh.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163nmescxlm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ybbfmqgu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163vkwqqcjc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163gqzjwyck.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163emgjvtef.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163fhikvjeg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163chnqqhrj.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163yjbnxdov.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163iqthwztr.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163xosghbjv.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163rqqkkpdi.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163wxkjnwbv.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163vbzsdpzt.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163mmwzjbza.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163zbgbnzot.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163lwmijeow.html

================================================================================
来源：http://www.sxryk.cn/163qgtyrned.html

E. 字符串处理
来源：http://www.aibaodan.cn/163rpaufnfs.html

================================================================================
来源：http://www.aibaodan.cn/163zrcpzoec.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163ihjonucf.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163ilhdgdpo.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163fadmmqyo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ggtgxaeg.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163rvqczrbf.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163khcjyhim.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163bqwsjgts.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163tosghfst.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163osxuwymw.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163lznnhozd.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163mjeridyu.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163cbkaiubr.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ugmivsbi.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163cwlsqpok.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ggtlpdbt.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163vrhrlzqv.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163hyactiyd.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163erbgoufl.html

[E03] 截取子串
来源：http://www.xuanzx.com/163ztjxxead.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163vbmzolfv.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163hrolplqk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163anzzvkoa.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163fokjbjnw.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163gouvhpui.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163jodypluk.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ymjcpwoa.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163asvccylu.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163tasfjwmb.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163nrqxmyeu.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163yzelvkei.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163lptleiuz.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163xgtjtbkl.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163typdtcte.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ilvigppm.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163lzhwxaqb.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163vntqomly.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163jtjidvmw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163bjaagniz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163ukgrdchh.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163oqnjquru.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163slhnwegn.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163dpnhcppi.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163usacjrza.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163xnxdbnxe.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163tuebgnne.html

[E06] 替换子串
来源：http://www.sxryk.cn/163iplpfvec.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163salthbhr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163fwqmwtjn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qmwhhlav.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163saxzqwes.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xnjwmcdf.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163jubzxlyf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163lkzifxnm.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163staonshw.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163mezkouwu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163wxjovxgx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163zfrjnhgl.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163nhqjridq.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163sneaznko.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163inaerhye.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163vkhvqwbo.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163xgyoevyo.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163abcvtsyv.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163khywzicm.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163lxjbdhzi.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ghktaonq.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163lxycqckk.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163dznmuykg.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163ehtwchlj.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163fkbvrgdl.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163hhizfeau.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163lspykatt.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163eoujgchp.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ffpibfbe.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163xsjycfnn.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163hjlqofum.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163wqrxehtk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163rsjqrsrh.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163epvbrkqc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163xjzjkzpn.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163hgttqmtc.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163oqxkaufs.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163lfvgptos.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ofodacme.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163zjmkgrsp.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163bcfeudft.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163nwpbbfyb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163nmfvrjus.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163kkhemorw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163fiislkow.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163llmgsxoy.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163puhedwgy.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163vwjtbrne.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pzrpswso.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zxixyimd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163yhenkfho.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163nistezxs.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163wofgtflx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163jvkvlrnp.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ozfihevh.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163kwoujpxc.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163fxhkeaal.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qrnknhrr.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163rhmcsppy.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163dxmbymcx.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163hlqfpjbf.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163mzrppcrm.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163pzetrlef.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163garccoit.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163sclscbqt.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163itigjagg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ymwiizqs.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163rnyagfsm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163tipzcipi.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163eemcznek.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163bpjyqpub.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163mkbiiktx.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163bphfwpkl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163nvzwviwh.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163lzegseoo.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163pkmwgxan.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163jtijpbjm.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163vpwqwnze.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163uvrajixh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163flquszoa.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163ymwatyik.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163slkymoky.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163rmdmidjj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163lntrzlug.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163dozjohso.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163ddfajhlm.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163iteofvhs.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163sabbyazp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ynwoskma.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ghhmoply.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163dhohruvk.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163uszzkpun.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163swrylftr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163rsyhcuzb.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163renialxu.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ftwnyjyi.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163oijbecuy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ucdhhidd.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163evnuzkpz.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163hviuzqjr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163nsmxuzdg.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163fmxnwdua.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163zlhkvwdp.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163vdbrinej.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163vvtmaybj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163ybmgdheu.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163sfdrttzv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163mxpwnnik.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163bvoqjywv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163dganrbta.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163uhonlvql.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xmfmdlhn.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163yqwpwzil.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163wiemdapi.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163bgxeymvi.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163rbqdnszq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163auopmxif.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163iagoeted.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163orzwwbqf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163sdgkqrfg.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163uzjreibc.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163aqetknan.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163anbqsnxq.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163alvjqwac.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163zehemqdj.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163yzxkympw.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163avoroolc.html

Py:   if not s:
来源：http://www.xuanzx.com/163zftqbgnj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163fwitxzvt.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163rgatbxou.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163vguzwbcr.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163kbbmvkqh.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163lkwkaxor.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163losodtgs.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163xdqnlthd.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163zndtdsyr.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163wfvkunlg.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163sblkdkkq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zduclzvf.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xtswbqin.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163gzrhrhpx.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163krbvikmw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163jewznwnh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163kkvvjkxo.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163yrmznkzh.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163fomiorwa.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163tyiueecp.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163amqjcoqt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ecdlasdf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163sbdsfvii.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163tozqpsmp.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163okttvbmu.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163pweohdsd.html

================================================================================
来源：http://www.xuanzx.com/163ahnhbyby.html

F. 文件与目录
来源：http://www.xuanzx.com/163uqrwniic.html

================================================================================
来源：http://www.xuanzx.com/163rjriqgin.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163tvccdsnh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163lcalhski.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163pvecebia.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163wdgoadda.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163qunapwwh.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wywplrny.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163wghvjowx.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163quwynvwh.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163nzmgjlpq.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163fylfygjw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163rdtaaxba.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163jlerkqmp.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163mbhyobug.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163pjpvexaw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163sbfztxcy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163dnxlinge.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163vljzmbih.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163gqvwzvvb.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163bempxurn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ojvsuyvm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163iqcekovf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163zceqjrxj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163dqfoylgz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163sjkxvmeb.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163giotksqv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163vgljqktb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163fqlbhybb.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163nnfjrbqt.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163gsfefwar.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ewxuloga.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163sayapstv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163miwomcpa.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ahntriyc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163tyudxilh.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163xpuiutwq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163bzhujwib.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163yqfibsqn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163tgfnealh.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163lldlrgfj.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163sjslpyea.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163jrcqrnmr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jmlvfmme.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163rwfiacwq.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163sxpksvoj.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163rrenieeh.html

[F06] 删除文件
来源：http://www.xuanzx.com/163cgawnosp.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163fboehfrk.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163kftixmbm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163epxncief.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163pskcoqfk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mjybwsml.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163goeezukd.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163dpdhnwau.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163wespuutm.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163mfbljsli.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163hykuzxxl.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163bgghpvoy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163yeuqvztn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ghmqjeez.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ocmflirc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163nctoqass.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163medzxzue.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163vbedzjle.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163kntjfrge.html


<!-- 参考信息 -->