外链999!wailian999！

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163uxjndkpd.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xtvwxiho.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163dbyiuisz.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163acpvkgzq.html

[A14] 注释写法
来源：http://www.xuanzx.com/163tgvkkdvb.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163xfpowbaa.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163uyotwpda.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163bgvqpbhu.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163simfcmnq.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163fkodojvo.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163zxgxmqdo.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163ytepuxhm.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163twrfdsdp.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163umbpkstj.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163mkhhlwoa.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163vmroyalb.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163fqiffpvq.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163crltzeub.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163prbwlsej.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163gidyhbss.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163fbtjwynm.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163orcacgzw.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163toehiuwr.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163gzhmdffc.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163oqlfptsn.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163clgxlnop.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163ovwhkjga.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163lbafjidq.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163rnfiuffc.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163sdyqgqov.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163ychmqjhz.html

[A17] 位运算
来源：http://www.aibaodan.cn/163ntoddxrh.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163uadeyltb.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163ibexchpn.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hysawtmz.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163ckibjvdw.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kohdrzox.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hmnkghfv.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ofbthxpn.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qkponmoi.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163ctjdsfiu.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163jswrliqt.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163nghmcana.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163njewsome.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ygfgapfm.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163oiplhsqf.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163qybfbazw.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163shccwmhp.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163gvggbctp.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163rxswxqfb.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163qsjmfquu.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163nbbcxpxp.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163qwmspqxf.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163tvsuwgsl.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163sxumxzgh.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163gttsyrxe.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163eiwhljpb.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163yyviajbv.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163xuwcjlbh.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163ztebbmir.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163zvbpjggz.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163edusiufo.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163erehxfmz.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163wxqwdjzd.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163ucoqzhhc.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163ogwpwqow.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163ceymucqv.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163oczmpapr.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163evcikqga.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163poyaetvp.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163tztliomq.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163mbwjhauq.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163vkdtjrbl.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xkjqxntd.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163gpqhchqa.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163ixtnuobr.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163comudonx.html

Py:   len(s)
来源：http://www.xuanzx.com/163yahddzpp.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163kopgjvay.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163luveyllt.html

TS:   s.length
来源：http://www.aibaodan.cn/163kmpvcycy.html

Java: s.length()
来源：http://www.aibaodan.cn/163qpgqzehx.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163ivvehkfv.html

Ruby: s.length
来源：http://www.aibaodan.cn/163sumbqpck.html

C#:   s.Length
来源：http://www.aibaodan.cn/163jqrflbqq.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163lhawogdi.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163rgoudiah.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163qiupbwpq.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163tmetolax.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163dzaoovvd.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163unufpysd.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163xhlitatr.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163cfbkqcfv.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163uezvjbei.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163cektfclv.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163bndubzvo.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163flpbqbip.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163wxouryqj.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ryokaudl.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163fjaxwjrt.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163fbhbejhe.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163mldbbxyn.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163dzfnhmob.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163ipztjyqn.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163hcnvilcb.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163peepqhgv.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163jilmuevp.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ztrxwyeq.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ogixkuun.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163buyrxmee.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163gvimwuhw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163vgmrwhyq.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163doycbfwh.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163urmeoevk.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163eqiuosxn.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163nrtmxevu.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163gtxweumt.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163hkubyofr.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163wggzdgtf.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163wdlhtnhh.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163nrkyasie.html

================================================================================
来源：http://www.xuanzx.com/163xoroxwfa.html

B. 流程控制
来源：http://www.xuanzx.com/163pamnutzy.html

================================================================================
来源：http://www.sxryk.cn/163ufyhqghk.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163mnoyaewv.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163rkqvgfbq.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163gpokgdzj.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163nklspmqe.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163vgbowlpm.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hdujpzju.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163etpmhozy.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163wksarubb.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jgvvmlaq.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163fvlqrmmv.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163gengtigo.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163ttftyvoz.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xythzcmt.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qkzmgzcg.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163aufvitrb.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163jujkelxq.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163avvsuldv.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tuvclhbb.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163lvqpsqwh.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163kfyhhvwv.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ilrztzzq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163eenvnqpl.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163msnymbse.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163vziiadfj.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163mmviabuz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163luhqeglz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ncrqowil.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163ruzxtlyg.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163jlhmgttl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163vnhtktjv.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163clfshvzs.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163whekwozv.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163rkcegogr.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163wbfcimfk.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163qnjtfbiy.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163dlwwfsls.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163sgsnavqi.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163wrkgiuxf.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163tieawyvt.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163nmxwhgub.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ynjykkub.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163coszzzdm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163mvndvlso.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163zognujyr.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163cskotfla.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163nsmjuwce.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163orgkwrem.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163rqszjlnp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ndanezwr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ucfvtcac.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163rescfuhx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163iqgkmujv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163mztpojxw.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163diyevght.html

[B07] while 循环
来源：http://www.sxryk.cn/163jxvbsnoc.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163qjvxbgtx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163gpqgsozz.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163hfvcqoje.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rlbhjfhy.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xrkxihul.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163fhwkuhzd.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163jlxymndm.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fwuvvrcp.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ivwqxuoi.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163sqmfttla.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163gukfiaiv.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163arganlkv.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ihprjwua.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163aqiyonle.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163snxpdzvc.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163tnbmsdkv.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nsjarrgm.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163vedzcyvh.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163stzludvc.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163iotxrgpe.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163iwztusbo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nxabtdsi.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zuimqoja.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ageetnsu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163zkxgvjff.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kjmqiwuu.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ozehmjzm.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163reecpowm.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163bxlprjhu.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163ldbajqqq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163oyboitul.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163ybhbynod.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163csqoumru.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163bqgnqdkn.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163bmlipkij.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163xmndrczt.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163tnbldjvr.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163pzflcjkq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163soqbzlba.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163zbgmwasq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163uswqivnh.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163fvmeojud.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163gnhcltbx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163zfwucnht.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163jllmrzel.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ufnectqw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163adqyczuu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163rbquqdua.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zebacdcb.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163sitmcsjl.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163obgpgigm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163esoksvxy.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163qisudsxj.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163jowfjngq.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163gmrhslvi.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163qkaswtcs.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ajpbqbck.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163fkodijef.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163vjwuljxl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163tjprkymw.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163lehcrxer.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163wsizhpdf.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163wdgnbarf.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163wwtwlabq.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ehchiolt.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163fzrkhswc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163kdmslqcb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163rtntglnc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163rlqgwikf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163fqxblznt.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163fruxpyej.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163mrvtmglz.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ohcmxkds.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163tdslltso.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163iavimoef.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163haoqnpht.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163cyavnojk.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163ipnhqvzl.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163jkldkqrw.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163zverziwh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163mvpcfgui.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ermywwhj.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163rsgzmlba.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163dhcppgxn.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163tbipamci.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163xashfyqy.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163auvvycqo.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163qboesake.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163qinvdqzf.html

================================================================================
来源：http://www.xuanzx.com/163ypqsyddl.html

C. 函数与作用域
来源：http://www.sxryk.cn/163oubeelfp.html

================================================================================
来源：http://www.xuanzx.com/163hxdqeftd.html

[C01] 定义函数
来源：http://www.sxryk.cn/163hhexyuvg.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163dzavvwfg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mywrkyvs.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163kgpurwyd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163wyljtimv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163aioauurx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163sqtfmqwv.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163pewrvshd.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163onfrsgap.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163bmwminmu.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163rwnqkseu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163iznwefju.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163vxphcixo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163awyprhpq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163rmgrmyih.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163eimawsfp.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163rbpcshqm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163nctpxnnv.html

[C03] 可变参数
来源：http://www.sxryk.cn/163oviehcij.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163lttukkqo.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163byrttbtq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qzowghrk.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163lpreecaa.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163xbhbadwg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163whiaubrr.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163aorlbofg.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163pawutrgf.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163rdcaemzs.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163kbnnukdz.html


<!-- 参考信息 -->