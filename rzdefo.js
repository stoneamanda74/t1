外链999!wailian999！

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163tpxhghiz.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163fklwzrlj.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163vhgojhpu.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163xjepmckm.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163emmkmcfr.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163dvvlfsju.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163ksbmmqet.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163xrrpwinz.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163yhgjrhdn.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163mrkowoav.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163atntxkte.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163arpwiwuu.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163dbiylktv.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163jldlkbxw.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163emeuwqyv.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163gxlmlkaj.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163ocohscnp.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ilbkahbb.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163eymxaisi.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ybymepni.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163auvokckn.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163gqokxqqs.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163voqdgjdp.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163gacekwnx.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163mscokwxf.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163ayeyrvgy.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163inropyru.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163jlhjdjfd.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163guezrkff.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163qwshqdaa.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163ifxdykdv.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163goylnhoy.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163bkxbwrho.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163cyaptsqq.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163oqemucaa.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163jgqcgxsw.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163fgnotmyd.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163cqcymabg.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163kumdtltb.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163cbjahtaw.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163ookyrofn.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163orklvbla.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163xyphthgr.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163usatpckd.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163tpizdvig.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163vzmyniil.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163xeeqoula.html

[A17] 位运算
来源：http://www.aibaodan.cn/163qnhnrasg.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jzcrblob.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163lswafmvv.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vcvxmwtf.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163nvjxljvk.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163eijbawpe.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163utoyvram.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nlvhmckn.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163klbkogym.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163gmnoqpqx.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163xuzeofzi.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163dmomvqtu.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ixjlyija.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163hxaowtxd.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163qninvodr.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163wgimdmkj.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163nfhywjcv.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163mvidhqve.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163hvfadcvy.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163wjeohdjf.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163dnppwpbd.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163pdlhxszk.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163xlrjojez.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163iktrtxtk.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163lugccjkx.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163fsxrqjht.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163jphoxgdt.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163qgktbozy.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163rpjsabtl.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163fmlyxyxx.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163xvqfzmbl.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163tsqnxcsl.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163vuonqodi.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163kpovuxhz.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163cpntqsgp.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163ztfqkjvl.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163oytuvyvt.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163kcquoiur.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163rmqexray.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163jagemktv.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163jlwzakpl.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163wsxpdhdg.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xwpbzgdj.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163kfntvahr.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163wskodsuj.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163fqniupog.html

Py:   len(s)
来源：http://www.aibaodan.cn/163rvkzuffz.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163abxvfcwv.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163oludhrnk.html

TS:   s.length
来源：http://www.xuanzx.com/163ihgdthwo.html

Java: s.length()
来源：http://www.xuanzx.com/163cogkbbtf.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163jchmmlou.html

Ruby: s.length
来源：http://www.xuanzx.com/163cgephxmg.html

C#:   s.Length
来源：http://www.sxryk.cn/163xvrpohon.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163wncdqqip.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163jcstuisl.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163gyuzocxo.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163pqxgrhpv.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163dfgdlkfa.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163oiwbzhtz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163yybuxsad.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163dtvdsqda.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163kiocvgfb.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163wxasrjft.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163vljvgjwt.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163dnozmvns.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163tupnznuf.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163apjhzgoi.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163bjdrulgl.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163itybymtd.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163hxvbkrbr.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163vkgdtzua.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163bfalkuss.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163hitmgebh.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163guuaflch.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163gfsdiyes.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163vhekeyxh.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163gtomaipt.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163qtffhtda.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163hscqmwji.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163krktrduk.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163uwxbksfj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163yyywitco.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163vwecqszp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163dibovfcx.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163voygymai.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163jranytnd.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163mugmdfua.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163rgkpyahl.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163qdmjqmhc.html

================================================================================
来源：http://www.xuanzx.com/163vsxbhkyn.html

B. 流程控制
来源：http://www.sxryk.cn/163zgmngefo.html

================================================================================
来源：http://www.sxryk.cn/163jewfodss.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163mudvscjy.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163pkyljkiz.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163wqlavbyn.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163wovlangg.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jqwugplh.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163aazwzees.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163imreilrr.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163jocyfmdn.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ddmvscty.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163bttdtolg.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163odopurjd.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163cexjbyql.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ssxyoftl.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163nmdybalm.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fhtcibcp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163vlhjnskd.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163yuruybst.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163woihgxbz.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163jbpszjrf.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163yqzenkqo.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163yznzdhiw.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163pyghkkia.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ofhgsdcj.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163bncwajqz.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163lzwcmcjt.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163vbkeorkz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163sypnswta.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163huulqryg.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163esarjtwh.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163mxcsfzfk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ycqtyljs.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163mxkwlpyl.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163nxwmnkrr.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163oleabzky.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163zframijg.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163utwcezra.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163ptphemjc.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163ygxiywso.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163vrdkamdf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163pyuusujn.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163uopgpngr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163eaakqnhx.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163xgwylafu.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163jmtlmvzh.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163ajtayevm.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163wueiubnw.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163gndoppvh.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163ceshhbxx.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163kqhmozff.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163qgqxnytv.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163iytaycar.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163nrdvtcvd.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163anxxtsir.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163jzehodbr.html

[B07] while 循环
来源：http://www.aibaodan.cn/163jwlvrwlx.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163slnzkfzl.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ymwquxbv.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163busiljfx.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163twttbgbr.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fjglwfav.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163itgwycxz.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163tpmpgacz.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xlmubgyr.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163iyiazspz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163oaknkmpr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163kbaupagh.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163araznzbq.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pdiilgzq.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nbmujdlm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163hgloyuxn.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163dpgmkgvt.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163eoionwag.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163xgxrllek.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163itcgizxx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163veduxetv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qeffokrb.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163doevdgsw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163thtfrtyp.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163sjzwlpnk.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163kxrytqtf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gupgzpgy.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163tyjxkuvv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163kwpbhvba.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163pyjwqoqb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ufycnycw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163xuaxzbgv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163lpznzuga.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163uxrkqurk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163orjpanlu.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163oyycnuio.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163epphihmk.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163nrmrjyxd.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163tjohtkpy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163gajvhyvw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163mvdhcbhb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163oaqovudl.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163iuxonufs.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163zphtvfzb.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163pazrpesg.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163lpgmdeqn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163zwinonwd.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163auqinygh.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lqavggex.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163amquwelq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zzukrtks.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163mnnkrgik.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163bxzfrwqt.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ptnnofrg.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163yludjvwz.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163nlzezlsy.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163eutvxiwu.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163tzwzepkp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163jpswrymp.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163mjoejetb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163giopxmjj.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163kkyltscs.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163isznywrq.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163gpbgdyuv.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163hcdbioof.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163qvpgvrty.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163eucbfemi.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163tgbnxndz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163qwbaliuw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163janhdyat.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163leoodopy.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163elwxncyz.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ymwfpfau.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163eutrkpir.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ihtbktxe.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163xegggnah.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163zhguxinl.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163bqrollhk.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163txgjzsoe.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163nuquxdfd.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163udsoffyh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163gcpergew.html

Py:   if not data: return
来源：http://www.sxryk.cn/163acoouuzl.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163cwoekslz.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163aaytaszl.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163jlgpehzw.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163txtmupkz.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163fzlxcmut.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163yydpmupl.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163hohznrag.html

================================================================================
来源：http://www.sxryk.cn/163dftkvzml.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163zyfiawdg.html

================================================================================
来源：http://www.aibaodan.cn/163cfvuhwpr.html

[C01] 定义函数
来源：http://www.sxryk.cn/163jybqdkvt.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163fykcrubm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xcajyevx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163mwukqukk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163mywvjhpc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xdfpvtku.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163jlllsuii.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163xpgmzdre.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163viwbhknf.html

[C02] 默认参数
来源：http://www.sxryk.cn/163hssombqv.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163gekczuob.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163xtktycrf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163qkuhubml.html


<!-- 参考信息 -->