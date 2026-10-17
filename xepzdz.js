外链999!wailian999！

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163etctsmwq.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163cqtijnjf.html

Py:   str(42)
来源：http://www.xuanzx.com/163kkotdycd.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163ubxbkxfo.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163jvisjucp.html

TS:   String(42)
来源：http://www.aibaodan.cn/163eetqpmxc.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163lbbpyqgs.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163bwwywqlv.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163kmrgmfua.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163gmuzgrzj.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163dnoobgev.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163huqwjrxr.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163teayqrlh.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163hdlfozvn.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163bnavnsry.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163wbyqcmza.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163mwkhhqys.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163xytvhezi.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163gozfzuyx.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163hdnutalc.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163hpovjcpq.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163vssygzek.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163djwmdomx.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163bcisrjpf.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163ufapfrue.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163optwzmdq.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163hgdlokfd.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163rkeryoat.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163thqxezjd.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163xpxdpgzz.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163dzyzevuu.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163komwxlrw.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163ntbtcmax.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163fgzeljuy.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163ubilruek.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163zjmvejph.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163msjvyliz.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163wltfpgab.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163djeoqekq.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163lkuceqor.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163nxhrkktk.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vrjryevq.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ulzylmtk.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163ccnwxtjh.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ditkwmaj.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163dgyalhvb.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163uczkbtcw.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163pwwwvkhr.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163ibkobdln.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163csnfmeys.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163glluwqyz.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163tfpawits.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163ssyxnumu.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163mnajxhxq.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163yeylogjt.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163cfwugmla.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163rkpdikif.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163sufcxfmc.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163hkbmzxlb.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163nzkwdedu.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163wtuiswnw.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163dccdukvh.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163ououykik.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xeiirvqy.html

[A14] 注释写法
来源：http://www.sxryk.cn/163rnqozcvt.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163zjciopgi.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163fwiawlyc.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ztpkdhmf.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163gbxkbmnt.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163odvgemfk.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163lykyvzga.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163pnoyizxo.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163mvifkiyv.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163tlgbbtwq.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163xhdonmeh.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163wudnisrq.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163vfubrmtv.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163yyscvedv.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163nmgbvijs.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163kyhcdfyz.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163wjcsvdcc.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163qdokodxy.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163midlzsll.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163rfqwczhy.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163vaualbji.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163rmqdgnyh.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163vxabjidn.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163upbvqskr.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163vtlgkloj.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163bzmfoudz.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163fooqdesn.html

[A17] 位运算
来源：http://www.sxryk.cn/163xbkwyeql.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163fzzmgtdf.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163syczfsic.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163kgopzhsq.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163gumynnaq.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163plogolzb.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hztrscbs.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163pbryuntr.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wxryhtak.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163fojxxyyx.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163eazaqhcx.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163jcllerrx.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163rlsmrhsf.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163yxfhlzso.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163fgxoowko.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163whpnemcn.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163vesmtpfv.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163bzhxiaii.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163lbeeaapa.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163kmwouxwz.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163bizovyvw.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163vjmkgwzp.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ustxnoyu.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163bbulypav.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163rcnnfchk.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163tmsesmfq.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163aqqvwrhy.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163aczuvgxo.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163qlmimcvw.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163hivtdgry.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163bzppaapt.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163cntagozs.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163xlgixpel.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163uktaflrc.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163ohuzidch.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163zbkmexyb.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163wlptpgbg.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163tfnkscxl.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163gkoerssp.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163glkisxzr.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163aynuahrl.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163erssizqr.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163cohvlmgt.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ebyfymxi.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163ipdsineg.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163rvrmrgxj.html

Py:   len(s)
来源：http://www.xuanzx.com/163ruaacqfv.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163ceskuqov.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163etuhancn.html

TS:   s.length
来源：http://www.xuanzx.com/163npkmaohi.html

Java: s.length()
来源：http://www.sxryk.cn/163ytllnpiq.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163tcwgzomy.html

Ruby: s.length
来源：http://www.sxryk.cn/163yntxzvip.html

C#:   s.Length
来源：http://www.sxryk.cn/163eeufpxwa.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163prjpwixy.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163lzijjxhi.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163cnmfcwoq.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163oehsxljt.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163igtalklz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ckmcnajk.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163fqykbpve.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163vblbtgxb.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163cgfzwedb.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163qjybcgxr.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163fkdhqhgd.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163lomucboe.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163nxyaueyp.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163uksniiic.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163hkdjcmqd.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163rsztbpns.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163wyfoetok.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163ubyynkcb.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163wxifpnkc.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163mwbaqveo.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163wgmffoqs.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163feawrcil.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163seevocnz.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163pxogslgg.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163crwqanxd.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163dtjqpyil.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163ffclodxh.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163wkftytci.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163tlsymmgn.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163bnfqsxxo.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163zzudfwwj.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163guycgtcn.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163mucomiqf.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163yjijrnvk.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163celihfwr.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163bsjmzbar.html

================================================================================
来源：http://www.xuanzx.com/163ylygrxak.html

B. 流程控制
来源：http://www.sxryk.cn/163bqcombmm.html

================================================================================
来源：http://www.aibaodan.cn/163znqywovn.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163fnlcfimi.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163vsaigfwl.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163vflvgcnp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163lsnhptrc.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mkskspwc.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163bmaburlo.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163kdsrzqwm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163nslfbqya.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163chmuidbe.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163vzqduvkl.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163kizxmvnb.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163halbtlku.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163teuedhyc.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ocwenefd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163dtmnohqb.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163htdlghci.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163sxvhqlki.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163aecoswpv.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163yrrsirmv.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163qxusgegq.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163pfcqmrdw.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163vvkbfmck.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163jbrlgfab.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163mzxkccja.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163mihatrwx.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163zafnpzmy.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163yaxmqwxs.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163fuqgxxmz.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163ganxupqc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ydmvbobd.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ilzjllwc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163upfwsufo.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ttldfkcd.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163vubvkekm.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163zpainzmc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163nxvfjwvk.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163xlmewnax.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163lndhltii.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163odkabsnx.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163dimtsmvk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163pkwioscs.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163mlpqwrty.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163fnqzfivf.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163uzmlqptx.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163zrkcbpsj.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163dqinbewh.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163susdiwgr.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163miirvhzk.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ogzqktno.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ywgjeujw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ndbtqljh.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163iveayide.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163tkwoqrui.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163hikkfsta.html

[B07] while 循环
来源：http://www.aibaodan.cn/163tawiiwja.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163faebtyqz.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163ddlccatw.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xbsjious.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163duafmood.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163opxuybye.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163odwjtcie.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163nvffhwpp.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qvrzwvof.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163vckducrm.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163jlpbmhbw.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163qniilxnc.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zgzkuazj.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lbtkncbm.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163eaotatqp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163wuepfput.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163onwalzju.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tkreamba.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163didlyxjb.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163euoznrxv.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163glueklac.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ltpuhead.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vqzbyjpm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cyxftbpg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163sephpxcn.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163lhjdgkjr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qmabohaq.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163exourvgf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163ncjmedqk.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163svetlbhn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163kpskxssp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163aotdsksl.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163qucxotvu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163wfbmcfka.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163oqouzsfm.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163dixnxohb.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163erqqpnna.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163xulkpwqf.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163bmcgaeii.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163prepgeih.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163geowknjr.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163cqfzaxjq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163jcefvjcr.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163umztlhjq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163vmlgbqxq.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163guwetabj.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163guaukmxt.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163sgpiszzd.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rllvbckd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163mpmskaol.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nnmjoauy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163anrtygdr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163bksmsbqb.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163dsbmmqoo.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163maepqnkf.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163fnpfulqt.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163fmvecnsh.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163yhqfnevl.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163wbqdrxlg.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163mywhupep.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163scutmzkl.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163sruohzls.html


<!-- 参考信息 -->