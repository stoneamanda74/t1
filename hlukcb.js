外链999!wailian999！

Ruby: arr.tally
来源：http://www.sxryk.cn/163zbjtubco.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ajfldrpg.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163xjjqydah.html

Py:   x in arr
来源：http://www.xuanzx.com/163pvgboztl.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163soratahk.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163vkkqzfwh.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163foqxtytr.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163oxyplgob.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163mxbchotb.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163oatpnydm.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163cskypwfk.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163bltfzrku.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163eiiygruu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163aifztrpw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163vnkgqklk.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163qucgcnlt.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163junwejgm.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163fzwpdkpn.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163cqioxkvl.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163gtpffycm.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163whyhgdro.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163pmqsixaz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163prnlongu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163cmteqrte.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163vvuqvkwe.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163aogvycio.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163qedwkkqr.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163ywqmdydy.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163wgtvblkj.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163psaqbzms.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163lgmqjjon.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163bcoltjjz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163hobgcbpi.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163dqwjslrg.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163lutvessr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163hycusvpl.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163zrtwtszs.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163xlabgwhi.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ndonvrjx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163qkafngnf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163mnbckcqz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163fwtemwko.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163lgfqrxiy.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163nwmoabyl.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163isgpxrmi.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163gwllglxt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163eyirneoa.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ljnaezcl.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163bdbqucrg.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163onyssngd.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163wzqusoos.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163xdnnjvfg.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163hnuxfkfc.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ikfkbqyc.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163hinzbhzy.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163epaaldxx.html

================================================================================
来源：http://www.xuanzx.com/163vlxtebnb.html

E. 字符串处理
来源：http://www.xuanzx.com/163avhvrmqn.html

================================================================================
来源：http://www.sxryk.cn/163fvrnrtvz.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163wnzwnmxp.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163cxcwcqxj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163gknrjmxp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163whulaykg.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163npptfpro.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163sucbhlcu.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163paczkybc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163gwchlzev.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163fbdyhczn.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163dyaydlwu.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163rmhqfcmj.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163vdvacdcc.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163dqfwqvny.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163pwvdmywl.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163mdupkowd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163vplzodzy.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163bmnwhtqj.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163dwvxhhfg.html

[E03] 截取子串
来源：http://www.xuanzx.com/163jmaapvgs.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163jmlzdjqh.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163fausdqem.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163oshsyryg.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163gwrasycy.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163hmbtuhvp.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163huyxrzgk.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163lueznsod.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163vqlezkpg.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163bnvxyzrr.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163ifpoujtw.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163dodgshgx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163hugaezjg.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163muusfjyt.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163itkarxxi.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163qetvfrte.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163vjeovdip.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163pohehsmv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163uhooljgm.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163grlmlazf.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163frhqyeog.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163xugezyzf.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163ftnmkfry.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163sipupjdv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163rfawquvn.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163qohtokbe.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163zlyxxhre.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163eopxvhcr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163xsppofgm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163lsixxeix.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rhfzunub.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jwnagoru.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cpbyjlgl.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163iadgncff.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163cxxmaohm.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163nmlecgwi.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163rvumgire.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163wtjztvzx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163xvxzgsln.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163dpomxees.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163jargbdau.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163paerjjln.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163vviawkhy.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163rtubnhzs.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163xbnfygzu.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163zqhgyjyk.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163awpjnttz.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163mnpnswdg.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163yfbierac.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163xdypmvia.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163quzzalqf.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163vkpgowdd.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163lhasqghm.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163nlkbdxfq.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163beulflkt.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163bcomqngf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163gqecpksz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ccemgeaq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163otflyzho.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163oeizebvf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163xywrkfzr.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163dgeoxvif.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163kwjzikbp.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ejqzudqz.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163xrmsvboc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163aokahswl.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ymhtxslb.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163itjbhtey.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ptqezrtn.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ywkkueyf.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163lkhrdzgz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163hemmemcj.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163hocnnius.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163vaeoagqo.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ahmhamjn.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163nnitvxwg.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163xjapiwex.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163xvhreuwy.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163qhzexwvf.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163zohkewaw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163kxajshru.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163logxuwaf.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163clkoqdfs.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163rmmqardy.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163tosvaxaj.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163wscoseua.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163qtvarwra.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163tdmxhkxv.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163kjexbyxk.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163xsvacvmf.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163ulzhvbpt.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163niughpof.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163tqxkaqor.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ovekqiah.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163mrljekem.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163avsicuso.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163fiuvzgik.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163zhrkracy.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163kurtwamx.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163jxunchyk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ifdbyfgy.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163smxttamh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ndwsmdfm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163qjzggsqq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163dzaclabn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163lxuynllh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163dtxcdysq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163syknidsm.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163viuqgtae.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163cgbyyned.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163fsspwyft.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163qyoownog.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163woopxemo.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163fkbiwgyp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163fludqjkf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163bsynkcyt.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163trmaqhnr.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163dmyocpol.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ufotkglz.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163pzruvlop.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163hkorcvut.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163pxfrdtia.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163vyyzvgsr.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163inbdwxsy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163fabxhmeu.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163ihczdcyo.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163zdpprudy.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ogrikiic.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163towhxprb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163gganlisw.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163kuffnuhs.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163ofcfwlqn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163kjhleozt.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163ykxvufjg.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163exremnmu.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163xegiknfq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163mhxnxxie.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163zspkwxbz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163tkeawclc.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163sukquzmy.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163zjckiymm.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163lyndjbqy.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163fzyaprow.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163wjxgeena.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163wzsxohmf.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163oultpzys.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163mthsfiky.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163gdnkounj.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163sysqgatv.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163xkfpiuhw.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163nzdtsrdr.html

Ruby: s.lines
来源：http://www.sxryk.cn/163beikamvt.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163brkhqegj.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163sdqvfcnu.html

Py:   if not s:
来源：http://www.xuanzx.com/163aqznnxha.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163hxyhfkws.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163keehemvf.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163kzwloyjo.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163lilgqozb.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163hqgtnxxk.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ymztxdtl.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163tllfzvyh.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163uiguihdl.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163fbmcuvrb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163vosyduav.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ytirmfym.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hhxzjirq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163pfwcxrkh.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163zqsttdpj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163wdhgnygo.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163uocohscd.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163xhmljfea.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163avohgggv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163fhmkbepm.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163uajesvpv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163uzawigce.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163uoksgqfx.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163fydffmfn.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163qesjxgxo.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163qfuhrffe.html

================================================================================
来源：http://www.sxryk.cn/163maeispus.html

F. 文件与目录
来源：http://www.sxryk.cn/163dplsaypz.html

================================================================================
来源：http://www.aibaodan.cn/163qnzcndsg.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ughaqexp.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163vpqcmyrv.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163meeazdzb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163bkemeskq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163egwsqynt.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ydosuzey.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163plccqhzy.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163gpwjaoii.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163seyzoyjj.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163dqduayxh.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ahcaacyf.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163vhqddbpx.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163nhgmpfqc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163uropvquk.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vuuntmpl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163miemmgok.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163zqsbwlwz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163qilpbqsm.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163ckunngza.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163esxzrckq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163yvcwejya.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163cpmggjdi.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ppwevhbq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ctahoohy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163cjzibfia.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163bztteuus.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163uzkzjcyc.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163vfmqnujv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163hjbnmdef.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163eiangrby.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163nsbsynaf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163pztykcuc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163mvyttwhz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163kqiogjpl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163gkepgsow.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163wyibqijh.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163dmvwwrvz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163khxhybbf.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163rhsqjkfg.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163blgbwrom.html


<!-- 参考信息 -->