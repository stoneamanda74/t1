外链999!wailian999！

[A14] 注释写法
来源：http://www.aibaodan.cn/163uihaniaw.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163uctpxjvb.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163wuyhpang.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163erqkpkmc.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163jkrxgxqt.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163nddpgots.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163rpluddfx.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163gnaxsfxo.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jumdsqkj.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163zljgligm.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163lxnnpxrs.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163lvtbramq.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163vxfctxiv.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163yrjooyla.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163vpybjsie.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163wvfkoyio.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163wzmxlzsy.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163jgyoxtty.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163xxcgskbz.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163xjmubvdm.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163bgqrphgv.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163cjdpoask.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163eknctimk.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163evhwoxma.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163oujzqfmk.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163wjobdhie.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163qtvxddba.html

[A17] 位运算
来源：http://www.xuanzx.com/163aujakydl.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qpgrbgnx.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163vnfskchc.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zbeuhczk.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163moxehgbo.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ebpgflyp.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163gwaxyuzy.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ozansffa.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vcnngnaq.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163yaorgsqj.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163eliyhnpo.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163wbwhiyex.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163diylkuhy.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163wfyoyewy.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163zpajugcr.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163gwoqgble.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163iwfbhitn.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163pqntudgt.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163cxjnznnm.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163pyvasmtx.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163lvcgxmse.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ghwcuvek.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163tsdxloes.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163shsjkwnd.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163tlcykzkc.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163rescaovl.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163udzyqqhh.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163lggmcupp.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163ijpxbkkk.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163yxluldzx.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163vqoagocp.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163dydrxrqv.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163teunmxvu.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163bakcsmnv.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163grksnrkr.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163bccvgavi.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163ydidhlmx.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163kmmpfmir.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163okmpmsns.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163vgzlbnfw.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163zcfqrvif.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163fdfdlrjk.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163trhutqpt.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163trlwkewa.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163giqrthyf.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163qznzjdqa.html

Py:   len(s)
来源：http://www.aibaodan.cn/163twuctmdw.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163ntgghidr.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163wbdfqjez.html

TS:   s.length
来源：http://www.xuanzx.com/163xnonnbff.html

Java: s.length()
来源：http://www.xuanzx.com/163burbuifg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163tjlalvnv.html

Ruby: s.length
来源：http://www.sxryk.cn/163zzjbhdqa.html

C#:   s.Length
来源：http://www.xuanzx.com/163yufrvnls.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163zbunedzj.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163caqtpnxc.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163xcgxqkre.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163qnurubrq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163kmntpedg.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mqlkyhim.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163fjprabea.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163sjclygeu.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163kxzrqkwd.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163lmvevgiz.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163ufsbtdnw.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163apvlynuk.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163yyptrdls.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163grimyeby.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163lzekcqsh.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163pixkjhrt.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163hkltrpwl.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163fzcigrcg.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163gpchypsk.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163jnahkaaz.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163shguganl.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163icedyjap.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ewawudpg.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163hygcezno.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163larrjheo.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163jhudoajm.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163jblthmlt.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163morzjzrl.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163icahnhqe.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163yhatprpf.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163ncktefaq.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163hxluuvaw.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163nxyziych.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163aknbzhxh.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163clqkgtzu.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163qlyucmec.html

================================================================================
来源：http://www.aibaodan.cn/163tvlexjwo.html

B. 流程控制
来源：http://www.xuanzx.com/163gpvjeapw.html

================================================================================
来源：http://www.aibaodan.cn/163ubcrimux.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163qrmxhdtx.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163voxtpvru.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163brnddikb.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163nmokwrcx.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163pvvxfbte.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xgokdiif.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163buiafiuk.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163lpwtmsdl.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163kljnqfzu.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163gllddjga.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163pjpjamnb.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163wjfzbvie.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163afppbrvm.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163fbonicjn.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163odpvltaw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163nwqncyzd.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163hhgvohqp.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163wrgmpsqk.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163pclblxjg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163sebqxbpk.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163asfxvbgb.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163lcxzwsim.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163bqnphixo.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163snprfuma.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163krjyvyyu.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163qofjhfrp.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163vumdkild.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163cfrnsexi.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163gabowkac.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163htyantle.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163pgjeuvas.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163quqeintm.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163dgghyfyr.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163dtyrupbp.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163brlrhcyc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163asufajjx.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163izjisbzx.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163bhjxwvjx.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163rwooohjj.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ejmwkmlh.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163lguwwgud.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163kieruoso.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ncwkxccv.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163okijtepo.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163pkrnthfz.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163trrexwin.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163zmyiwcgy.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163nzoyvfli.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163wbytujtb.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163oqwejrha.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163rwqfsadu.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163gtsewgfd.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163dwjlyskl.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163dmltozzi.html

[B07] while 循环
来源：http://www.sxryk.cn/163ztyawete.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ftfowmbk.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163cblhziwv.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163yjdrdlsd.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jvnwklqf.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xcoptpza.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163enpavfpt.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163giibxnrd.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qhrmnkgr.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163ewyvmrdj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163wujijmth.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163rchdrqpp.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ymbbkizg.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lpufxxai.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163scscvisf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163yijqudjt.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163csqujgna.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163yzcyckri.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163sdkxwcsy.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163hstmdbpc.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163unawotcx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163sapiawfe.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ugsetbny.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163urijecds.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163bqcvdwff.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163iitiadst.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163btzcbqpk.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163hxkpppzi.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163epxwyylx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163soqqefxl.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163zyusptry.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163gtkomvwr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163nlxritel.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163slpnaqha.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163tcaktvyz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163srarotvp.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163inbjajwq.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163begdrokk.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163jauzmjuq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163vbqqvubp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ilvwzibv.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163hlttbfii.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163smzwukdy.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163yijekozs.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163sdseclsd.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163wxvbvcmh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163akvtxmci.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163jaqhmtcr.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lakowubk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163myfgfvmd.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163fnqqwfmj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163ecdhlsqm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163kmfyzppf.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163aipazugm.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163anskayve.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163ogbqqers.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163okxquxwp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163grhhtrnj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163aurisfdh.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163hskgdeei.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163pidtnvbv.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163rvealkyz.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163rizxpobi.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163nxwnwvnd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163dkvqvbdx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163jjxihsad.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163wjffugkn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163wroacqnz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163llmdoswy.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163crjpeqfi.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163wkmpoywj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ghhuagce.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163dkwynicx.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163mnmpugih.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163iarvxiwp.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163unqpxpdt.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163ffnnmjcn.html

Java: a && b || !c
来源：http://www.xuanzx.com/163bcpfeilb.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163fnukiyji.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163htuqdexr.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163kdxyokot.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163lroqayrq.html

Py:   if not data: return
来源：http://www.sxryk.cn/163toedyquf.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163oiehlvli.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163dgrftmru.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163nheylvhb.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163qnevyxeg.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163izknibwg.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163fsftsyzp.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163mjozsmjd.html

================================================================================
来源：http://www.sxryk.cn/163kdafrags.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ujzaccvc.html

================================================================================
来源：http://www.sxryk.cn/163nxywmodn.html

[C01] 定义函数
来源：http://www.sxryk.cn/163zgbwxreq.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163twkraggk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163owwibmhb.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163hjtncwjv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ntuxbqqf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bnuhnjze.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163dszexxag.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163bhulqgdp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ngvvfced.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163gbpfsrgs.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163whhghbme.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163zmavbkjk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ikrsfwfa.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163xysvzwdx.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ikxvmmev.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163zjhtpjuj.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163csivryxd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163rgwqfhfe.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ahmhjehp.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163zskkxioi.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163vrttjuhr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163mimyvyel.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163karggbus.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163kmdqluid.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163uosvytlm.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163lhctrwwr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163ajunvcsn.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163qyqyvjuc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163smshghkb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163snyxpayu.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163jtshrais.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163hruzwmhh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163vyrkkuca.html


<!-- 参考信息 -->