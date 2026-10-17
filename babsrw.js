外链999!wailian999！

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163mvaysqmh.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163unctsvau.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163mlczofzk.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163nndcqnhg.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163zsqobatn.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163szlpgdmc.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163agmwvwkj.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163uqniwnzv.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163pasrfsri.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163hzyhvhms.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163ztpyqqpr.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163bnaprkny.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163tuixmpde.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163mmkuyads.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163scusblpt.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163umgfpvco.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163xdtaiayx.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163cbynljbx.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163fqqimnqr.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163yikdfedh.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163pmpjeqxa.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163uluflkqk.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163bnfcqnnq.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163ovxbpdba.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163upuwhibj.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163ejhnomlr.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163ymkgoeji.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163pysgwawv.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163khqzstlc.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163keyvfdvy.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163qvuwtrvo.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163anhaaptj.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163pqzxzqdh.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163ynfqdseu.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163inydepmq.html

[A17] 位运算
来源：http://www.xuanzx.com/163xoofcnfr.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163cmdmxliw.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163ywnmzumy.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163btjjytbi.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163nkumfybb.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163nuiammqs.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163acqfyvhj.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163mvcavhny.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163pvnoetmj.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163qqyjddep.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163cojiwbpv.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163indafqug.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163mdzuwbpk.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163wltalyqc.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163zfliujuc.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163epvgpkwc.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163mgavncft.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163bqyrigqj.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163dtjuhutt.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163mlespyom.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163pbniiqff.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163yxcmadgt.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ufkiseim.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163tvbogpby.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163dkapfcbq.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163wvoivvju.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163nehcedjj.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163vtsejaov.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163ucvghvoq.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163nbxxnchu.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163vsfwvsqz.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163xvjqwlyy.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163vblmbbxc.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163poeuvbqn.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163xtnvayzf.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163dxlnzhbu.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163wfhaspbe.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163qgmpqsgy.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163woukxigl.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163dqtipwpz.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163czquywzj.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163nfcwkdff.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163yhpbztod.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163avsgckrl.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163poanzyas.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163xnxggmea.html

Py:   len(s)
来源：http://www.sxryk.cn/163wpingbzx.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163ifufvcwx.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163lrrmjejp.html

TS:   s.length
来源：http://www.sxryk.cn/163xkxaettr.html

Java: s.length()
来源：http://www.aibaodan.cn/163rcrgypgw.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163txfzyuvu.html

Ruby: s.length
来源：http://www.sxryk.cn/163bkhfdhco.html

C#:   s.Length
来源：http://www.xuanzx.com/163ccnmvwia.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163wiegntnq.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163xxalpzty.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163rjzlyqdd.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ohblktvv.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163azsrmfwa.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163almnanab.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163mzqhrhto.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163qgjiowrd.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163wrwtgbmr.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163ibwyuhll.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163muioujzv.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163wrfwyhai.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163itahgjen.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163dsozkyth.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163wcjsatlp.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163ogiowbuw.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163dmuxxmrl.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163cxzefibw.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163dvmswyoc.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163iklcrqmp.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163npdveskz.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163uoinpzcq.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163tauyniad.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163vcdwokfo.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163onphgqmj.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163ysuyjame.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ywfxbpkr.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163dsazfyqu.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163bfpkfeob.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163gwclgirk.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163madhvwwx.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163ygvuksbo.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163hbjjvnxe.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163zsvxduqp.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163htzmcwao.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163jascsymj.html

================================================================================
来源：http://www.xuanzx.com/163demfyfan.html

B. 流程控制
来源：http://www.sxryk.cn/163wmhmdljp.html

================================================================================
来源：http://www.xuanzx.com/163sxbxfahs.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163vlblpmiq.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163lsnayhpq.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163dmyhoswa.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tmrkhrcq.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163vsargmir.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163umhhoytt.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163yqquyaat.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163medguzab.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163lkndvpie.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163gpysmqov.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163fdcqxvzh.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163gftnwdsa.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ufealgak.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jjtwoxqp.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163maphgpki.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163dvflhzwy.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163klqejjnu.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rkvefkck.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163wdlbvsdh.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163fyprsfrz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163uldjqwkj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163gqrpatvv.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163kvzpkigi.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163dxfhvksv.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163zirmrofr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163cwachito.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163rhxgwhxf.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163ycjkyjll.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163pphlcskb.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163khlkalur.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163hbhzvran.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163nrsdfmgr.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163zcvwmkiz.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163imuzxmju.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163mxsckwvv.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163mnfbzdbp.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163ygpfypwi.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163ipwtwhrz.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163durvxskd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163krihtskx.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163tyxpctvd.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163kvqhdwfx.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163cneygqwf.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163hpkshmru.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163eayyqlif.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163lgcmaqlf.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163nrvhxcvo.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163poqguevl.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163qdlzdter.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163hgtvhmzy.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163vlsrxyav.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163qhcjnoeb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163tzfbevpk.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163gjruglqx.html

[B07] while 循环
来源：http://www.aibaodan.cn/163exugahxt.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163ffdtmtdg.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163maewkmsa.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163agudwzwq.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jgtfymgl.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fghirlgn.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163cqqpbfaw.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163xzrjyyah.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jfepzgpy.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163smwxztfy.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163bzggthvx.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ryweyryc.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163umajpktj.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163caqyxshe.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wamxpqld.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ywkxxuhb.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163muixqcmy.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163oekuzxuq.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163ygrwfvcg.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163rkfjurqj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163rdcvochg.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mxaxvslz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nsxzudas.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bnpjxppz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163tkcjutin.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163kiwarqht.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tuhvpbsr.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163xwsvhhar.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163cnvplsky.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163vaifajvb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ebfnjysi.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163vbiwfigw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163wcqavokh.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163sulugqca.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ybkxxktc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163pvhnzxtk.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163bjnnkqfu.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163utpdvoup.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163cnnlfvxv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ozbdkxec.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163nymbhkxz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163neddkoxu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163bucaggmk.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163iinozris.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163ntuahpim.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163badthcwe.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163cvxcacwi.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163vsmrlwxe.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163esrbfdxq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nghaolan.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qhwhlyeo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163qkuqtasm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163kqmrgrgu.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163rufjxeiz.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163ubmylncn.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163heskrbph.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163qthxprnr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163krtcvgxn.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163bgunfgge.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163krmhaxwv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163hzfeqxuj.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163orfcnutx.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163bxespwsz.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163jtjgywhq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163nlmuimku.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ezgcsnro.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163zjoqjxbd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163yfejvnso.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ipzzatcw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163fbhpbjmv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163kbxkxuce.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163vyjijehs.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163iqxxrmro.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163zklatcnp.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163oqgsiiru.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163uwcsxfso.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163hqdokcvr.html

Java: a && b || !c
来源：http://www.xuanzx.com/163vyqytdxe.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163iodfkuuz.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163pngiodae.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163czxeebse.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163nuixpjne.html

Py:   if not data: return
来源：http://www.xuanzx.com/163crizkwwk.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ulmrbyzq.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163fbiqclls.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163outqnewo.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163tjjbajsf.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163ymlcwlyg.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163zdvsndxw.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163cqkbkhul.html

================================================================================
来源：http://www.aibaodan.cn/163tyxbjdlg.html

C. 函数与作用域
来源：http://www.xuanzx.com/163rsrerqbc.html

================================================================================
来源：http://www.aibaodan.cn/163tymaqldw.html

[C01] 定义函数
来源：http://www.sxryk.cn/163huunzsel.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163jmijwpir.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163uuomilja.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ijegwddz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163wucjqmzn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163fseehhri.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163eulrbycv.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163mykqxjex.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kgkubajx.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163bmlssnju.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ikehvwcu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163gqwnglhp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163gmrjzhwb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163tnraaycd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163dlovzmpg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163frgwelll.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ykqnwosv.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163myeayzce.html

[C03] 可变参数
来源：http://www.xuanzx.com/163dtzncnfs.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163bwofnvrk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163zllwobdq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163tlfwqjin.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163mgsbxnbx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163iekdzszu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163huqwwcrh.html


<!-- 参考信息 -->