外链999!wailian999！

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163yudcynkh.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163xbhdalrq.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163aovsmbah.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163tkvuejrm.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163eelopygg.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163saepycev.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163bvniogzk.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163zogutvwm.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163xyyqiigp.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163xsdenkcp.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163uenripkx.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163nbuyqpba.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163lbkygxbk.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163dvulzwhl.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163stwgamwi.html

[A17] 位运算
来源：http://www.xuanzx.com/163ercuemyy.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163agmssnqe.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163depovgcv.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163iprvexcb.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wlrezsrb.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163bnobyfnn.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qihlwqne.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xllrtpay.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nnqnuwgi.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163nuikyxlc.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163oglzhvzh.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163pnwplwaa.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163srkgkpca.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163jpzoyfyk.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163fssprcrz.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163ktgzqdsb.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163jpelpwbz.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163laugixnf.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163oicvubqo.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163rmkskzsk.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163hvvegibp.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163agrnzbfl.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163flxeizhm.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163styzytdp.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163hanuhcjd.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163fhiwkmou.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163dtvctwth.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163wcyohsjs.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163eqtcuqye.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163hqvnazfg.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163hkghsikb.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163qviybxtd.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163igtbqlkw.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163isapomwk.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163psepcnmy.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163kgickxws.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163xerltrfp.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163wufiruom.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zswuzijs.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163qhqxbliy.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163nyhlcqtp.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163iketcdva.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163opaedrth.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163xrfuozvr.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163qakwaxkb.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163ctsgnvhn.html

Py:   len(s)
来源：http://www.aibaodan.cn/163panpwotn.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163ffsxgcmg.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163qctovhzh.html

TS:   s.length
来源：http://www.xuanzx.com/163sarbrkjb.html

Java: s.length()
来源：http://www.sxryk.cn/163wsrulsqm.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163zwaacojl.html

Ruby: s.length
来源：http://www.sxryk.cn/163uzpcmfti.html

C#:   s.Length
来源：http://www.aibaodan.cn/163phjdkoku.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163wdpaydpx.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163hnigabti.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163bfhmnpmj.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ixnzkokb.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163abhphcff.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163cpjhwcip.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163gdaifslp.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163kwtoobgf.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163hktcgpgu.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163gkgdcorv.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163mbpzklcl.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163wlmyjftq.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163jqwetfll.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163zqxwsvmo.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163manmqnxq.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163qschrvkg.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163mlewnbjr.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163ctcznepr.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163edzvjtif.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163mygmfesk.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163prbrvjfb.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163cgmzaabc.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163kimgiuoo.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163gygfmcov.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163jzidzzoz.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163vwrxuypv.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163zzrnsbup.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163mxdcdyuo.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163frpanpcq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163plwxeexw.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163izevprvn.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163ldtkhqqi.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163oxspvyhn.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163keorgdli.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163xthsmlrr.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163lcouemgb.html

================================================================================
来源：http://www.xuanzx.com/163qgyplmna.html

B. 流程控制
来源：http://www.aibaodan.cn/163cjsvemih.html

================================================================================
来源：http://www.sxryk.cn/163utyaxyvt.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163shspfdrf.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163gwtnwseh.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163kgcslfft.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ujrqfqbk.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163agwfwfhg.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163wxncvvfe.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163ppwjgchh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163pwcblwpu.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163fjcmqivi.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163saiexple.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163maijibdx.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163shgdlxpg.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163keirdjsp.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zvukkvju.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ppdgpvlk.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163hvmmqlpc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163ucakpxpk.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163jehpqeya.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163slyrddgh.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163lhvoddnr.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163qxyrvkjj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163zfivevth.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163tiuzigkw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163grxujdqt.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163itjvlbvc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163lssrifyx.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163ndbosfox.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163nysbxukq.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163uyiremnb.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163edalwbbm.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163bpbhwfzc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163tecforvy.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163hhaecawm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163sqtcyrig.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163kzpaqgvc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163hhxjhkyv.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163bkjjcfiw.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163njombzry.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163clkwebqe.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163omlivjqn.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163jxilbtfo.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ajzytzpy.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163qvajpqyt.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163ocqkmaiw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163mbqhatrc.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163fkkzxjbx.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163qwqokpnp.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163kwcfyhep.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163xwdqrpko.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163lpnsfzvr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163pnphomhg.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163dumromsd.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163gqkesomy.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163vkrydvcx.html

[B07] while 循环
来源：http://www.aibaodan.cn/163kbxgmrum.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163ezmbloxs.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163uupvmevo.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fksorhib.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163yqzxhagl.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163msludbnx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163qrgzpfvk.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163cpoivdny.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mtmznpif.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163umvakchp.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163pxeprksi.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163bvtzcswg.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163cgykmeay.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lvdocyfb.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163seoffpzx.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163rfbufnoa.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163vcdjmynh.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xxftwsti.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163rirhhras.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163rinmauuf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163kqcqxmub.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wyzshbdt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163arevweey.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163eshymyup.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163yjolnovj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ykbxynwm.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lsgrdkrm.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163kipfaarg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163zbjaukcp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163fiwacbtp.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163pnemswpg.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163mjtnntor.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163humxhvrc.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163jyzxydmd.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163jcujtlne.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ypfryysc.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163pvuhaclp.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ibvddovz.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163msbipnzn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163aaucsbop.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163brefwipc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163laycugqi.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163xzphpugm.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163idmqecjb.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163djdgqmxc.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163bmvzwwbg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ghiinoyi.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163czgakxyq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tfuezudb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nvankbjy.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163xockxoln.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163oflhpurc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163vmwjiquv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ccshgdjj.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163akkhypzi.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163npigdcly.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163tzkalwah.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163sihpqtri.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ijfjhjpc.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163nkizuzxk.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163cetaspir.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163mnpzfunv.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163cueefsne.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ijvuituk.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163huwnfhnu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163xbwhqkkf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163viscawbz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163zboorhrr.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163xbldntla.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ncrxbfge.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163vjiknshs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163qvwehjxc.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163uvbywssz.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163hwgmweue.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ptrnxstv.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163erkuoshq.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163zbtrovym.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163lhwhiags.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163txikskyz.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163pzqihcmq.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163dpqxiihv.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163sngfzqnl.html

Py:   if not data: return
来源：http://www.sxryk.cn/163yccxcvrr.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163vwzzqkmu.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163scxzjqlg.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163jnpeetur.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163qxovjjyd.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163tpbioiwo.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163hmfyewdk.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163lmnhsjxb.html

================================================================================
来源：http://www.xuanzx.com/163rmhyfzma.html

C. 函数与作用域
来源：http://www.sxryk.cn/163vqtkbhaf.html

================================================================================
来源：http://www.xuanzx.com/163duockjzv.html

[C01] 定义函数
来源：http://www.xuanzx.com/163hatocdvc.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163mkoqjlky.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163adpkgpdm.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163kmrslglq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163lmniumyj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dbjqwwey.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163xxvnswwd.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163kklveggn.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163whpbhdxc.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ajpjmcet.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163tqeaiwgt.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163jknxpkdk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163mxsbpkoa.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163bcytmtdx.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163cocbmxxd.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163wlfkyuah.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163qmabcfxr.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163bknijgec.html

[C03] 可变参数
来源：http://www.xuanzx.com/163wdeppieb.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ddmkqqkj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163lstpjrwq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ousmfnce.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163evybvola.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163xamridzx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163gkllpfry.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163klhkptbi.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163hbcqcdlh.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163dsuopcfl.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163eyfxtedv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163wibmpdaf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163wyhvsktr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163taxcdzds.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163vdqnxdlq.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163tnfcihta.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kjfwbulk.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163zufkckes.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163waitdupl.html

Py:   return a, b
来源：http://www.sxryk.cn/163kjivesoa.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163lhjgwdne.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163apfxlymr.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ynbvuzlf.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163opxxymnj.html

Go:   return a, b
来源：http://www.sxryk.cn/163agzzemzs.html

Ruby: return a, b
来源：http://www.xuanzx.com/163qkrnmhoe.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163egikcpac.html


<!-- 参考信息 -->