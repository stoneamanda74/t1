外链999!wailian999！

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163wtvlblum.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163puqtwevh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163iqdyysgw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163zykoffsb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163utymxxmt.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163inlnqnpp.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163lurilmjn.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163yrvousiv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163lyqxfdbu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163cdueoufx.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163uuglthrc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163bpkycuqx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ndrazwvj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163qcynhoso.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163tefggqgd.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163upidqzrb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163vywbxdey.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163mmfdthjb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163czggkldb.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163hmpvrfip.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163lbszbvjl.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163lgszbtfz.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163qcrcxyuf.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163peezkqnj.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163tpnesptn.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163xjpxtflo.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163etoblsbj.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163jgrltcfb.html

================================================================================
来源：http://www.xuanzx.com/163nbushrtn.html

E. 字符串处理
来源：http://www.xuanzx.com/163jqbgliur.html

================================================================================
来源：http://www.xuanzx.com/163tyvpubjz.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163ayfbfvkf.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163gelvlgqr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163xkotgxbp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163bnypeyqa.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163idxoehkf.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163vrhobxuv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163krabtusv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163hkdephnu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163uynrgejc.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163jbdavpgc.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163autltqez.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163fotcueav.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163qipzvlsq.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163wqmyrdkb.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163spupsyix.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ynpkmxyq.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163vdfbalho.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163kxurcnug.html

[E03] 截取子串
来源：http://www.xuanzx.com/163ilebgiev.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163egwzlyyr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163zqfpgest.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ykokisij.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163wwsxppso.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163vkheadmc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163dnenviuv.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163cktmddrv.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163pkqgljsj.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163jgxrtcje.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163gdghgwgk.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163wfwmzumw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163ikisjseg.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163jojsdfwy.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163pqmpdswp.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163czatvhau.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163fxzsexsm.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163eyyokays.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ztpwdsbh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ielleika.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163edwmvhzh.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163zwsapafv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163xyvasfrr.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ujbvpumi.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163umpkrera.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163bvlhqwmu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163lweuqwst.html

[E06] 替换子串
来源：http://www.sxryk.cn/163chcwtkur.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163hwsmzkjy.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163rqwcdrus.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jlwuwhlf.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wiajwayf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xdcgfoxq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163ugablanh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163vhhghbtc.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ucbmuuof.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163intaehme.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163vcafvajg.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163tdnjmjrx.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163icotopdp.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163unmcqplz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163jrworrrt.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ailcrsen.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163vkkcjtks.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163yzhoqxuw.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163caqyojbr.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163ivuwojym.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163teuzfbud.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163zxldkmim.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163qkrynujs.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163xdphkrmy.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163lyegdekl.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163qmtmmvmc.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163apnclbqg.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ubwjdsbx.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163sxycgitl.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163yryzouqm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163brexmiqw.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163wfxzzwfe.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163buyivgei.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163mnamyaql.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163rncpmljk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163aqgzjgot.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163bfvxobjr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163uuiknczb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163kayhbvgy.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163tbynxodz.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163jaysgjhe.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163vncteyvs.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163bzjqabka.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163lcbedwkj.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163hajkweye.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163zldhouil.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163xmifkefe.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163tphtgqjb.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nybbrnkk.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kilhwjxr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163mhmrxtdi.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163nwpkhtzu.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163dqwisqwd.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163belpopuf.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163sehqrati.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163dvjanbzc.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163nxctabxe.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163aqyxuljb.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163bnwalddh.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ldigskzs.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163kqhpiryy.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163ycynkihu.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163pijpuvmp.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ddpsumvt.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163wdgrvrhq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163adilfyog.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vwgmvrim.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163sasolfzs.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163zjkgquwi.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163zaaypeix.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163hcpwirdb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163dmskaugd.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163wxkthqci.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163yxehjdmv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163cwqjebxt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163xejemfmp.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163pgmsfzqr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163nhdcjsan.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163pdmedprt.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163afiuvyrq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163xshmcfwr.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163mktxbfih.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163pcymcaih.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163tpswktll.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163iivekddt.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163pwuvtpqx.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163nvqlryih.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163yvczlskv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163merjyijc.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163kqrzfzne.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163rizebwos.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163gdfivozf.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163njrzkfcy.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163qffddxgv.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163fgzrnaxz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163vkdiitvt.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163uhoyddnd.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163bqwmwwhc.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163lexavzli.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163sepbugux.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163yjdfithi.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ixgapdoq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163euaiqukb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ihpufdfg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163vxadfugf.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163jqusemoe.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163iricaycw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163uekjwjbd.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163oqrpxjax.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163cfexompp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163mlvjiryd.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163otnxqbap.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163qvpoyhyu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163zwubyaik.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163bbngeroq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163wspfmlzl.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163xvlrennd.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163atyxbzeg.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163begjsbme.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163vwpazrdw.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163elijcvxx.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163nkkcapwk.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163hbahxhos.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163scvzazhb.html

Ruby: s.lines
来源：http://www.xuanzx.com/163dtuvghnz.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163xckraske.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163edkjapxz.html

Py:   if not s:
来源：http://www.xuanzx.com/163kimyazkw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163pjvpcdmn.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163iworyucc.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163qwoqrpte.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163lonshidw.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163arfmhktn.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163gksbrdbb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163npscnkvf.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163qvjhkecj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ittpevhs.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163kjdduqsh.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ccfepzaf.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vkpsheja.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163yrnufhgi.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163lxcfzfhw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163mhqqimcj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163nbutovrc.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163zohouzcf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163cycxmuxj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ltuxkcuk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163sdgardgq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163lqaxawil.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163qnuahxes.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163pqjfpyaz.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163prfvgvwf.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163tovzvgqn.html

================================================================================
来源：http://www.xuanzx.com/163qtvutwft.html

F. 文件与目录
来源：http://www.aibaodan.cn/163cvkfddev.html

================================================================================
来源：http://www.xuanzx.com/163ckthgpju.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163hiopgdgd.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163eygviqhz.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163gtodyhom.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163mvabovhx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163zjjqxjik.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kghvtkkx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ngwfeuou.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163cazytvmi.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163rbjwxqtz.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163faowddja.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163hjupxzhu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163iigwjrzb.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163gcpynujt.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163aqmqrjta.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163yyfmwffi.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163slugqwco.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163xwsrtejx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163vjnnfwgp.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163xbgvcgub.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ugjophzc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163noonvldz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163hjtlexqq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163pyevnbhy.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163tgqpvdwp.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ssbczhzt.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163txstzsny.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ikdtohcm.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163dvfzrnbf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163gbpnxycs.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163kttulinn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163qtxiubld.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163samakngh.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163gwhbmktn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163zvgbcllm.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ptzjendn.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163pjuqiohi.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163swoyvtku.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ahotoifm.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163wazmsqpn.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lviwduuv.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qhvnsfgs.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gccjruct.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163xbkuwhie.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163tfkoofva.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163misktjmj.html

[F06] 删除文件
来源：http://www.sxryk.cn/163otwdpjtj.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163xeylwhjd.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163oxankyjm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163mkgywtfr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wgluobqn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xxfvxxvb.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163yfxvenfo.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163hhbvgzlx.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163igrenmfy.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163lywyspqs.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163zqknqqgb.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ipzzltfo.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163obmatinj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163znibbqjx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163pzydygry.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163bwltdkpq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163qxmyfzvt.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163vjdmiwxx.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163qcqcfjaq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163lwhjobbw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163vjyddpzw.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ixeximwy.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163obcqogfq.html


<!-- 参考信息 -->