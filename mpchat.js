外链999!wailian999！

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163tsxrcxrn.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163qpctgrha.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163gnrtesvx.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ehwpemes.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163xznmyvhy.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163gxpinpmg.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163martovcs.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163urcilytj.html

[A14] 注释写法
来源：http://www.sxryk.cn/163trxiuicp.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163ocdrsefl.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163qhfazqyc.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163xvzhjbhm.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163whlrglqi.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163eacftnjt.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163djcjqzcg.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163pozvyxhg.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vgvjmoqj.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163zfkjtbpb.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163duhkejse.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163nxrjmocf.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163iwurgigv.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163lvybosyf.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163xkvkvucd.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163kackfrmf.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163srvmuyhg.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163ovejjuuj.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163qkjttorb.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163onqqdwsy.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163daeqoeki.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163lxxlhwme.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163qtcmepkz.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163qjxmeujp.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163oozhabfz.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163nelkhldg.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163bdxtouge.html

[A17] 位运算
来源：http://www.xuanzx.com/163oynzjkrj.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163sxrzyrwd.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163ddmswves.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163cxzfbuqo.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zcuvhmbm.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163lwomnize.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163fqvapork.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yjyucdfg.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qtskhlia.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163vccxftae.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163xklbsekz.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163zzbacgmd.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163sxwesifo.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163vbbyxljf.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163acdhkgcy.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163stwprtip.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163htyiryyo.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163nyxmobxj.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163pfghlzmd.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163lztlffry.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163ouzttidw.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163arlmbiub.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163jhpqucnv.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163usgoorty.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163ayogyrlo.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163hjamyktr.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163mvgoytoe.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163illgmbzk.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163hyrdfybf.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163wyodtesn.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163prtokoqx.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163raborezz.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163ndfcvipe.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163cuxufogb.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163aoeiwgus.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163yonekjru.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163bbbkiedy.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163edckakvr.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163vbysqhan.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163satzaiim.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163oyhxojqo.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163liykrgcs.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163bfembleu.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163sulqilsd.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163nlvsrbfc.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163tisuhlfp.html

Py:   len(s)
来源：http://www.sxryk.cn/163vxqriapx.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163rkewalba.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163iqhhbgau.html

TS:   s.length
来源：http://www.sxryk.cn/163checmnon.html

Java: s.length()
来源：http://www.xuanzx.com/163mhzzsjag.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163ypagyhpw.html

Ruby: s.length
来源：http://www.aibaodan.cn/163rwwggiqd.html

C#:   s.Length
来源：http://www.sxryk.cn/163qszfqumn.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163avnanrcq.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163oryyjhej.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163kbqzrkvt.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163dengrhlo.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ifoitisa.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163nvtesfbq.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163fxmukgbo.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163hhfbhdls.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163pbyarzac.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163bofrygpd.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163egttnimt.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163drysruvy.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163rlargqzb.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163qwzwmzup.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163roglxtoo.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163pdxywpxa.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163deqdrwsp.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163lytkoucg.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163qjycnaye.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163ddfwyhaa.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163gadwfflr.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163rckhatpu.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163coumythn.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163gpwwtxvl.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163lulzhclk.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163ajfwcijn.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163dudjgvvb.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163qnglkevo.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163ffbaeejx.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163tdyhqpub.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163youbsaml.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163mzrjoszz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163msmxnhvd.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163zawhzfwv.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163lfsrcpin.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163gpfgvtjv.html

================================================================================
来源：http://www.sxryk.cn/163qrqwsxuc.html

B. 流程控制
来源：http://www.sxryk.cn/163zpjshrnu.html

================================================================================
来源：http://www.aibaodan.cn/163ewfncxpk.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163oifvneyp.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163rkmytimc.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163mcigqpex.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163nsdkrbwr.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hiqavcdl.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163oktmsyyr.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163bmpjwwuw.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163ulvapzvm.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163uvbkihvy.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163oyiqdkfh.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163xtaggccd.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163xvtyqrrw.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163sbhrsimt.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xczsfuuq.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163yvrmkioa.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163watfetth.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163gamudedx.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163utbarfhb.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163qehizkdf.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163jvoahsuf.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163uvkptlwi.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163mwixbztm.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ukugylgc.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163wrszusyy.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163ghjlxykq.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163hxhfkpuh.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163qreznexy.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163yohubwav.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163nvcoiytj.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163qdcawpqp.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163dcuanjot.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163eptqclnk.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163bmtbkjbb.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163nvtuboka.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163spzthppq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163xrjzfghs.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163ejvudndk.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163jpiuwcje.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163mqjhjaab.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ebwbueww.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163dqqlfbxi.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163txjpvipg.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163etjhlzmg.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163qnvcsnvo.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163qgjsjazb.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163doqxsdjv.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163vrakjsxr.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163xgpirosj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163jaztxxxn.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163zmrcilav.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163vtkqetel.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163puhbetiu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163fdbnfgxj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163oehlvdwh.html

[B07] while 循环
来源：http://www.aibaodan.cn/163nksucvaf.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ccxdcpna.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163vkabcqea.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163badkeudp.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163geyiotjo.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pcmmhgti.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163vdpqkpkx.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163jolejnev.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163sbjilzqf.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163hcmuzovx.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163glgsngva.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163xuefhaou.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wnjvrcqw.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163oyimcbqk.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ukahdpjf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163sbbvgxek.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163lsrbsgbn.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163yxdfkpgr.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163dpsmbyhf.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163chrdlemu.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163pwascrnw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zgbsyull.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vxxsoeiw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163uoxjkzit.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163eaxqtskj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163parjlwlz.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dluwohab.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163mwxhaabl.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163jblljuwb.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163gbruxszi.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163npvxtckl.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163serujncw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163qjugrkch.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163nimsxfcr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163vkwgwlcn.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163wdgvyltp.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ekfqbugu.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163cyqwzkqd.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163rgewtphg.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163apnpjbzt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163wguvuefj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163xghlhwmq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163wjtqxhtv.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163lshykenu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ngowznfk.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163wpfvnamv.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163zwjqpvuq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163kbonkcsx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163budzyvwr.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pgmwzwot.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ydobkfdy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163lrukyjtn.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163rgsabbvb.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163rvswqqyq.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163llcfazpm.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163rnqpbpac.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ryiuccfk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ettepynw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163aohvzbed.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163lnojgxxr.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163telniksw.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163uthqzxdz.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163okyfralu.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163gbqjvoxm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ieykuchk.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163whmbwjgp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163wfggmlfy.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163sdfaqzuv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163mtxmaigw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163fdhephbv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163oyeamviq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163hnsivcwk.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163nocrcltt.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163uenlaphx.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163trrhkist.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163hrydmuvt.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163dzcvfzlm.html

Java: a && b || !c
来源：http://www.sxryk.cn/163gznlamyp.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163kvgbpwht.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163suwogduf.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163hvuwcztt.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ppvatjbn.html

Py:   if not data: return
来源：http://www.sxryk.cn/163aazepacl.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163fdsekoxi.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163fvblnptt.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163ooodbznj.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163umvbfnsi.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163pijczwcd.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163nszoksqq.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163uiehmvql.html

================================================================================
来源：http://www.xuanzx.com/163wwjkaphv.html

C. 函数与作用域
来源：http://www.sxryk.cn/163nhifyyai.html

================================================================================
来源：http://www.sxryk.cn/163rifysiyg.html

[C01] 定义函数
来源：http://www.sxryk.cn/163gfpcwxom.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163rkqcknzc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qrxakiqn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163sznmgela.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163wenlncpn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163uozxxype.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163yxmvwwdv.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163snrhnsiz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ojyfqiyj.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163psslwdjg.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163zzhqhgpd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163bocnxadg.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163eaqbamit.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163xubqwcmf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163wghfmlwh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163bbeenbjc.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163fhvghifj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163maganqgh.html

[C03] 可变参数
来源：http://www.sxryk.cn/163kcsioyyw.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163srmztdzg.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163sclhneai.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163xgbvvnfb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qpnwbxdt.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163lxtpxxjp.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163cokqpmlh.html


<!-- 参考信息 -->