外链999!wailian999！

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163zurqrvmv.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163qrglrppf.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163kpsursig.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163grwspjrp.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163fdledafv.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163awwnwdvm.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163qrybbzpy.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163zjopajef.html

[A14] 注释写法
来源：http://www.sxryk.cn/163uhgimxhv.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163gbhtbblq.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163mbpwxhmr.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vbmgqmub.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163hbtfhakm.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163tinntrtj.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163tfxkvuqw.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163rbuplyao.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163mapfiawm.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163igfmozdd.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163skonnfsf.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163ddvfhelk.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163bedfeigu.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163cppcfpeh.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163qrzzwiev.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163upmxehxe.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163izphrjkj.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163mxmxjzst.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163swadnjzi.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163yqyslqym.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163mojfooiu.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163mtpediby.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163xfnuueex.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163wyndvulm.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163gkaxsrau.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163wegmjsmh.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163ejikxjhd.html

[A17] 位运算
来源：http://www.xuanzx.com/163ujzeaphz.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163tqqvompk.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163mznpqyjf.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163kejluhpo.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163rvhrchln.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163iozvjdzj.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ofikduii.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163eryhjnmd.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163uxpkaxeo.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163aubvfojf.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163abxnhpsj.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163rkuidivl.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163qqsefqnp.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163crjihlok.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163zdudrghj.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163ebsnhsqs.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163wgixutbi.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163nlrvjakh.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163zmsujdwq.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163uwmdaium.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163zhmajoxa.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ofqtwmmn.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163gmosiwah.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163pvjsztzz.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163psdlyqdz.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163clxyhnwf.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163bfhqsceu.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163gcruztmd.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163hmuhmsrd.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163kfsibvlc.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163zebxwjre.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163vwzixkib.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163kiwwmgmh.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163lkcumfdb.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163chejsnhz.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163oqziaual.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163azldlvbu.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163tcsbnbrz.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163tbxiuzby.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163fmgosrfb.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163qkqywwah.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163swxmoljx.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163davgtkni.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163bgztwdtw.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163bpjheask.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163dmbyoqfx.html

Py:   len(s)
来源：http://www.sxryk.cn/163suthpyat.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163zyuuusxs.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163unaazbed.html

TS:   s.length
来源：http://www.sxryk.cn/163ydwnipzb.html

Java: s.length()
来源：http://www.aibaodan.cn/163cqmppdqq.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163batzfzca.html

Ruby: s.length
来源：http://www.aibaodan.cn/163kkmepaag.html

C#:   s.Length
来源：http://www.xuanzx.com/163ivixxsot.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163jhkvbsyz.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163ukdovdoc.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163iuxajxml.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163qdtdpify.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163wnimsvmk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163nhtuaocc.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163keffmhlp.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163crydwopa.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163juxqprhb.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163fcsosaii.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163elhoioos.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163jlrawsah.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163nansgqkv.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163snzgvtwi.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163lpbqbpod.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163gpuczzsy.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163qfvfgolb.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163znwntdem.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163lfhfotha.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163xfstbtrp.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163nploofxm.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ajnkyoai.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163hndjkvzt.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163rinzvbdv.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163bvrbuipl.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163wamplczi.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ovpfwbxv.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163geaeorzl.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163bebgjmlr.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163miqlqicg.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163weykhwzu.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163qxzlxadg.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163bxinmnnb.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163cfiobzqp.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163lqyrrfzy.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163olsmdhue.html

================================================================================
来源：http://www.xuanzx.com/163ktrojwfg.html

B. 流程控制
来源：http://www.sxryk.cn/163aboixsgf.html

================================================================================
来源：http://www.aibaodan.cn/163yenvrgjm.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163pfahgsme.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163pskylksv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163vospsycg.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mokovixn.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163iimhxsml.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163kjfakllo.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163vwwhfslv.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163jrzcoryh.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xgehdmsi.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163iogbuafr.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163zetpajul.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163djtocniy.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163aitnlnnk.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163oezhhvdm.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163slzscxcb.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163veotedod.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163nlefeqct.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163pszaldas.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163cdnbzorf.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163chctspru.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163vprbbmri.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163gxweaekv.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163fzgiusza.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163hiryqcon.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163yloydzaj.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163hujqijnl.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163mbpsgpum.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163zrxhiack.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163plecvieb.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163vpfjkdkd.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163yzsczqdf.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163wwfgsazd.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ynxfxzou.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163gpvsrvoh.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163gpswaicz.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163zeobodtg.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163xgluwvmc.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163pavmyrxq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163qnhsxuex.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163famrfcrb.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163vliovkqm.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163mcswixtn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163ykfejbzk.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163alyimfnf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163owrhqwhj.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163zikwclmc.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163bbwcvhqo.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163hlhfnnml.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ksqpcurh.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163wmjnfzbp.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163gihjvhmo.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163yyjwfolg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163lbezzwhb.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163motnwzoy.html

[B07] while 循环
来源：http://www.aibaodan.cn/163obdzfpvq.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ombjdbvc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163dyxjimfr.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lhrdpqdt.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163witkuksd.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dhcghgpu.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163iclteffk.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163iwknikli.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zvlwoadt.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163nhrvuxwd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163dqftdxgk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163gckmxrai.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ffagqqxs.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ngxzmhmo.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mxvkpjpp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163kdkxcnra.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163zdvbwykj.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nndbzcmq.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163wsvbcuwm.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163vgbjmlna.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163civjmkfb.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cxipfjog.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pmblczuw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wdlzrepg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163jyivcbvi.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163ydzfpitu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163sxeagqho.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163dwlszide.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163dccpxgch.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ypsmwboa.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163qibicglq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163yluishgw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163hnicrujq.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163gcxxyrzk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163vxyybtck.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ugddlteu.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163hjfnkour.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163sjmddxbt.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163wxqvtrwb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163rdqlellt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163bytwqmeg.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ixhklisl.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163blpspryh.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163dttqisdm.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163ewoyyytr.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163nlawgdns.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163tkarbdgq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163gttzkoru.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163jwebssqa.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zeraytpz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163cjhlwvls.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163xwqgfpbn.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163cncbupyb.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163mtjwcgrf.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ruwjxlyc.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163oyvmhyav.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ngdabofy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163xvggwdnd.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163smldsnbi.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163pcgeltem.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163hstjpoej.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163prccifvd.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163lxvswdtj.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163cciwxzks.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163vxpxlxgz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163esnihwdg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163bmnhjkhj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163advxfljc.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163vxxadnrs.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163qcdyqzyf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ikykjbiq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163wzoyxhcv.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163nrufgbwl.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163yramofxt.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163msuntpyh.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163mfaiiash.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163gypcjqoi.html

Java: a && b || !c
来源：http://www.xuanzx.com/163ojnxkebn.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163ezaezydp.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ysuhvsvj.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163dkatthai.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163vznvbnka.html

Py:   if not data: return
来源：http://www.sxryk.cn/163uazglwpl.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163hpizucdk.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163weczqjbx.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163mhedvzja.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163yvqqvzcf.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163ggmltzla.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163dxghwzrv.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163rcsefoip.html

================================================================================
来源：http://www.aibaodan.cn/163pywdchyq.html

C. 函数与作用域
来源：http://www.xuanzx.com/163diimbnnb.html

================================================================================
来源：http://www.sxryk.cn/163sqptrujq.html

[C01] 定义函数
来源：http://www.sxryk.cn/163fuenmpzy.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163kumcyykj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163srdjeznl.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163jtktvwcq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163wipfyzeu.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kondsazy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163khcpmgxp.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163dtioqsso.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163kpybtjeh.html

[C02] 默认参数
来源：http://www.sxryk.cn/163yxmswivz.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163llwdnppv.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163shcnuwif.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163tiesrtvo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163xvwnjtti.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163wmbmjlkv.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163cwqexirq.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163exgvggsx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163tinmeqdm.html

[C03] 可变参数
来源：http://www.xuanzx.com/163avwozncn.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163qhfcgsdv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163fevgbrdu.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163tyvuwplm.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163bvlrkeqo.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163yavowutp.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163gcypsahj.html


<!-- 参考信息 -->